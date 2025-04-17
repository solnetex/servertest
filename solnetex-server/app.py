from flask import Flask, request, jsonify
import os
import google.auth
from googleapiclient.discovery import build
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request

app = Flask(__name__)

# Define the SCOPES (Google Sheets API)
SCOPES = ['https://www.googleapis.com/auth/spreadsheets']

# Set your Google Sheets ID here
SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID'

# Define the range where the data will be inserted
RANGE_NAME = 'Sheet1!A2:B'  # Adjust this according to your sheet structure

# Google Sheets API Setup


def get_sheets_service():
    creds = None
    if os.path.exists('token.json'):
        creds, _ = google.auth.load_credentials_from_file('token.json')
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(
                'credentials.json', SCOPES)
            creds = flow.run_local_server(port=0)
        with open('token.json', 'w') as token:
            token.write(creds.to_json())
    service = build('sheets', 'v4', credentials=creds)
    return service


@app.route('/submit', methods=['POST'])
def submit():
    # Get data from the request
    data = request.get_json()
    email = data.get('email')

    # Check if email is provided
    if not email:
        return jsonify({'error': 'Email is required'}), 400

    # Get the Sheets API service
    service = get_sheets_service()

    # Append data to the Google Sheet
    # Adjust the date format or other fields as necessary
    values = [[email, '2025-04-16']]
    body = {'values': values}

    try:
        # Append data to the sheet
        result = service.spreadsheets().values().append(
            spreadsheetId=SPREADSHEET_ID,
            range=RANGE_NAME,
            valueInputOption="RAW",
            body=body
        ).execute()
        return jsonify({'status': 'success', 'data': result})
    except Exception as e:
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)
