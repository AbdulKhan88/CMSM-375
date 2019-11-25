CREATE TABLE Cart (
    CartId int NOT NULL,
    UserId int NOT NULL,
    DateCreated datetime NOT NULL,
    CheckedOut bit NOT NULL Default 0,
    Primary Key(CartId)
);

CREATE TABLE CartItems (
    CartItemId int NOT NULL,
    CartId int NOT NULL,
    ProductId int NOT NULL,
    Quantity int NOT NULL,
    Price double NOT NULL,
    Primary Key(CartItemId)
);