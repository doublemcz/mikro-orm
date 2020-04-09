config = { _id: "rs0", members: [{_id: 0, host: "mongo_1", priority: 3}, {_id: 1, host: "mongo_2", priority: 2}, {_id: 2, host: "mongo_3", priority: 1}]};
rs.initiate(config);
