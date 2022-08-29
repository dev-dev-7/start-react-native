// import Db from '../db'
// import { convertToArray } from '../../services/utilities/commonFunctions';

// class PeopleQueries {
//     addPeople(data) {
//         const realm = Db.realm
//         realm.write(() => {
//             realm.create('People', data, true);
//         })
//     }

//     getPeople() {
//         const realm = Db.realm
//         const peoples = realm.objects('People')
//         return convertToArray([...peoples])
//     }

//     clearPeoples() {
//         const realm = Db.realm
//         const peoples = realm.objects('People')
//         realm.write(() => {
//             realm.delete(peoples)
//         })
//     }

//     getFriends() {
//         const realm = Db.realm
//         const friends = realm.objects('People').filtered('relation = "2"')
//         return convertToArray([...friends])
//     }

//     getRequests() {
//         const realm = Db.realm
//         const requests = realm.objects('People').filtered('relation = "1"')
//         return convertToArray([...requests])
//     }

//     getBlocks() {
//         const realm = Db.realm
//         const blocks = realm.objects('People').filtered('relation = "3"')
//         return convertToArray([...blocks])
//     }

//     getPeopleById(id) {
//         const realm = Db.realm
//         const people = realm.objects('People').filtered('id ==$0', id)
//         return people.length > 0 ? convertToArray([...people])[0] : {}
//     }

//     getSearchResult(key, relation) {
//         const realm = Db.realm
//         let results = []

//         if (relation == "4") {
//             results = realm.objects('ChatList').filtered('name BEGINSWITH[c] $0', key)
//         } else if (relation == "5") {
//             results = realm.objects('Post').filtered('title BEGINSWITH[c] $0', key)
//             nonSearch = realm.objects('Post').filtered('NOT title  BEGINSWITH[c] $0', key)

//             results = [...results, ...nonSearch.filter(post => post.tags.findIndex(tag => tag.startsWith(key)) >= 0)]
//         } else if (relation) {
//             results = realm.objects('People').filtered('name BEGINSWITH[c] $0 AND relation = $1', key, relation)
//         } else {
//             results = realm.objects('People').filtered('name BEGINSWITH[c] $0', key)
//         }

//         return convertToArray([...results])
//     }
// }

// export default new PeopleQueries()