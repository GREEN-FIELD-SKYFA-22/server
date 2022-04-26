const conn = require('./index.js');


module.exports = {
   
    selectUsers: function (callback) {
        const sql="SELECT * FROM users";
        conn.query(sql, function (err,result){
            callback(err,result)
        });
      },

      deleteOne: function (id, callback) {
        const sql = "DELETE FROM users WHERE id = ?";
        conn.query(sql, id, function (error, results) {
            callback(error, results);
        });
    }

};