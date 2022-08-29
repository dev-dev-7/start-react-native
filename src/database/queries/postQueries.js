// import Db from '../db'
// import { convertToArray } from '../../services/utilities/commonFunctions';

// class PostQueries {
//     addPost(data) {
//         const realm = Db.realm
//         realm.write(() => {
//             realm.create('Post', data, true);
//         })
//     }

//     clearPosts() {
//         const realm = Db.realm
//         const posts = realm.objects('Post')
//         realm.write(() => {
//             realm.delete(posts)
//         })
//     }

//     getPosts() {
//         const realm = Db.realm
//         const posts = realm.objects('Post')
//         return convertToArray([...posts])
//     }

//     getPostById(id) {
//         const realm = Db.realm
//         const posts = realm.objects('Post').filtered('id ==$0', id)
//         return posts.length > 0 ? convertToArray([...posts])[0] : {}
//     }

//     deletePostById(id) {
//         const realm = Db.realm
//         const posts = realm.objects('Post').filtered('id ==$0', id)
//         realm.write(() => {
//             realm.delete(posts)
//         })
//     }
// }

// export default new PostQueries()