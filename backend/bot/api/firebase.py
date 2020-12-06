from firebase_admin import initialize_app, credentials, firestore
from ..model import *

cred = credentials.Certificate('./collegiatecovid.json')
app = initialize_app(cred)
db = firestore.client()

