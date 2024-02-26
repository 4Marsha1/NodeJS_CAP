using my.bookshop as my from '../db/schema';

service stats {
    @readonly
    entity OrderInfo as
        projection on my.Orders
        excluding {
            createdAt,
            createdBy,
            modifiedAt,
            modifiedBy,
            book
        }
}
