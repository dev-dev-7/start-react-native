// import Db from '../db'
// import { convertToArray } from '../../services/utilities/commonFunctions';

// class ChatQueries {
//     addChat(data) {
//         const realm = Db.realm
//         realm.write(() => {
//             realm.create('Chat', data, true);
//         })
//     }

//     getChats(userId) {
//         const realm = Db.realm
//         const chats = realm.objects('Chat').filtered('sender==$0 OR reciever==$0', userId)
//         return convertToArray(chats)
//     }

//     getNotSendChats() {
//         const realm = Db.realm
//         const chats = realm.objects('Chat').filtered('status==$0', 0)
//         return convertToArray(chats)
//     }

//     addChatList(data) {
//         const realm = Db.realm
//         realm.write(() => {
//             realm.create('ChatList', data, true);
//         })
//     }

//     getChatLists() {
//         const realm = Db.realm
//         const chats = realm.objects('ChatList').sorted('lastActivityTime', true)
//         return convertToArray(chats)
//     }

//     getChatList(id) {
//         const realm = Db.realm
//         const chatlist = realm.objectForPrimaryKey('ChatList', id)
//         return chatlist
//     }

//     deleteChatList(userId) {
//         const realm = Db.realm
//         try {
//             const _chatList = realm.objectForPrimaryKey('ChatList', userId)
//             const chats = realm.objects('Chat').filtered('sender==$0 OR reciever==$0', userId)
//             realm.write(() => {
//                 realm.delete(_chatList);
//                 realm.delete(chats);
//             })
//         } catch (e) {

//         }
//     }

//     clearUser() {
//         const realm = Db.realm
//         realm.write(() => {
//             realm.deleteAll();
//         })
//     }

//     checkExist(id) {
//         const realm = Db.realm
//         const chatExist = realm.objectForPrimaryKey('Chat', id)
//         return !!chatExist;
//     }
// }
// export default new ChatQueries()