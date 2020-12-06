from firebase_admin import initialize_app, credentials, firestore
from ..model import *

cred = credentials.Certificate('./collegiatecovid.json')
app = initialize_app(cred)
db = firestore.client()


doc_ref = db.collection('colleges_stats').document('Duke University')

query = Duke().query_site()
doc_ref.set({
    'isolation': query['isolation'],
    'pos_cases': query['pos_cases'],
    'total_tests': query['total_tests'],
    'pos_rate': query['pos_rate']
})

