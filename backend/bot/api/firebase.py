from firebase_admin import initialize_app, credentials, firestore
from ..model import *

cred = credentials.Certificate('./collegiatecovid.json')
app = initialize_app(cred)
db = firestore.client()

schools = [Harvard(), CMU(), UF(), UIUC(), UNL(), Duke(), Yale(), Skidmore(), GVSU(), Amherst()]

for school in schools:
    doc_ref = db.collection('colleges_stats').document(school.name)
    query = school.query_site()
    doc_ref.set({
        'isolation': query.get('isolation', None),
        'pos_cases': query.get('pos_cases', None),
        'total_tests': query.get('total_tests', None),
        'pos_rate': query.get('pos_rate', None)
    })

#for college in schools:
#    doc_ref = db.collection('college_policies').document(college['name'])
#    print(college)
#    doc_ref.set({
#        'frequency': college['frequency'],
#        'people': college['people'],
#        'classes': college['classes'],
#        'checkin': college['checkin'],
#    })

