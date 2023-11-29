/* criamos as tabelas */
CREATE TABLE products (
    id VARCHAR(100) PRIMARY KEY,
    name VARCHAR(50),
    category VARCHAR(60),
    price FLOAT
);

drop table products ; 

/* inserimos os valores */
INSERT INTO products (id, name, category, price) 
VALUES 
('fbedc02e-214d-4813-bdfe-803fbcd02d39', 'iPhone 13 Pro Max', 'Smartphones', 1299.99),
('1a2b3c4d-5e6f-7890-abcd-efgh1234ijkl', 'Samsung Galaxy S21 Ultra', 'Smartphones', 1399.99),
('5678abcd-9012-3456-789a-bcde1234fghi', 'Sony Bravia 4K OLED TV', 'Televisions', 2499.99),
('ijklmnop-qrst-uvwxy-1234-5678z9abc0d', 'Dell XPS 13 Laptop', 'Laptops', 1199.99),	
('mnopqrst-uvwxyz-1234-5678-abcdefghijkl', 'Canon EOS R5', 'Cameras', 3499.99),
('2345ab67-cdef-8901-ghij-2345klm67890', 'LG OLED CX Series TV', 'Televisions', 1799.99),	
('abcd6789-efgh-1234-ijkl-mnop5678qrst', 'Apple MacBook Air', 'Laptops', 1099.99),
('uvwxy123-4567-890a-bcde-fghijklm9012', 'Nikon D850 DSLR Camera', 'Cameras', 2999.99),
('3456ijkl-7890-mnop-qrst-uvwxyzabcd12', 'Sony Playstation 5', 'Gaming Consoles', 499.99),
('ghij6789-klmn-0123-opqr-stuvwx4567yz', 'Bose QuietComfort 35 II', 'Headphones', 349.99),
('2345pqrs-6789-tuvw-xyz1-2345abcd6789', 'Samsung QLED Q90T TV', 'Televisions', 2199.99),
('ijkl8901-mnop-2345-qrst-uvwxyz6789ab', 'Lenovo ThinkPad X1 Carbon', 'Laptops', 1499.99),
('cd12efgh-3456-ijkl-mnop-qrst7890uvwx', 'Canon EOS 90D DSLR Camera', 'Cameras', 1299.99),
('yzabcd67-8901-2345-6789-ijklefg12345', 'Xbox Series X', 'Gaming Consoles', 599.99),
('qrstuvwx-2345-yzab-cdef-ghij5678klmn', 'Sony WH-1000XM4 Headphones', 'Headphones', 399.99),
('lmnop9012-3456-uvwx-yzab-cdefghijkl78', 'Samsung Galaxy Tab S7', 'Tablets', 699.99),
('dasdasda12-uvwxyz-1234-5678-abcdefghijkl', 'LG Gram 17 Laptop', 'Laptops', 1299.99),
('12jhsq32a-qrst-uvwxy-1234-5678z9abc0d', 'Google Pixel 6', 'Smartphones', 899.99),
('abcd5678-efgh-ijkl-mnop-qrstuvwx9012yz', 'DJI Mavic Air 2 Drone', 'Drones', 799.99),	
('efgh1234-ijkl-5678-mnop-qrstuvwxy9012', 'Sony WH-CH710N Headphones', 'Headphones', 149.99);



/* primeiro select para comprovar a inserçao dos mesmos */
select * from products;

