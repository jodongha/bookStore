exports.orderDetailItem = 'insert into order_detail (order_id, book_id, order_detail_quantity, order_detail_price) values(?,?,?,?)';
exports.orderItem = 'insert into order (order_date, order_price, credit_id, credit_kind, credit_expiredate, address_zipcode, address_address_default, adress_address_detail, user_user_id) values(?,?,?,?,?,?,?,?,?)'; 