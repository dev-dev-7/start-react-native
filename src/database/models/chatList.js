
const ChatListSchema = {
  name: 'ChatList',
  primaryKey: 'id',
  properties: {
    id:  'string',
    name: 'string?',
    icon: 'string?',
    lastActivity: 'string?',
    lastActivityTime: 'date?',
    lastSeen: 'string?',
    badgeCount:'int?',
    relation: { type: 'string', default: "4" }
  }
}

export default ChatListSchema