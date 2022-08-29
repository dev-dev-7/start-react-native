const PeopleSchema = {
    name: 'People',
    primaryKey: 'id',
    properties: {
        id: 'string',
        name: 'string',
        fullname: 'string',
        mobile: 'string?',
        about: 'string?',
        icon: 'string?',
        isRequested: 'string?',
        age: 'string?',
        lastSeen: 'string?',
        distance_in_km: 'string?',
        showDistance: 'string?',
        showMobile: 'string?',
        city: 'string?',
        state: 'string?',
        country: 'string?',
        email: 'string?',
        relation: { type: 'string', default: "0" }
    }
};

export default PeopleSchema;