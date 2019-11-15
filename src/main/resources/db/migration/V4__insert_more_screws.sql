INSERT INTO screw VALUES (6, 6, "General", "#6", "Philip Flatten-Head", "assets/ScrewImg/Grip-Rite 3.jpg", "Grip-Rite", .30, "1 5/8", "12");
INSERT INTO screw VALUES (7, 7, "Wood Deck Screw", "#4", "Hex-Head", "assets/ScrewImg/TimberLok 7.jpg", "TimberLok", .60, "6", "20");
INSERT INTO screw VALUES (8, 8, "Wood Deck Screw", "#2", "Hex-Head", "assets/ScrewImg/TimberLok 7.jpg", "TimberLok", .40, "4", "15");
INSERT INTO screw VALUES (9, 9, "General", "#8", "Philip Flatten-Head", "assets/ScrewImg/Grip-Rite 9.jpg", "Grip-Rite", .45, "2 1/2", "12");
INSERT INTO screw VALUES (10, 10, "Wood Deck Screw", "#9", "Star Flatten-Head", "assets/ScrewImg/Deck Mate 2.jpg", "Deck Mate", .22, "3", "12");
INSERT INTO screw VALUES (11, 11, "General", "#10", "Hex-Head", "assets/ScrewImg/Everbilt 11.jpg", "Everbilt", .50, "3/4", "8");
INSERT INTO screw VALUES (12, 12, "General", "#6", "Hex-Head", "assets/ScrewImg/Everbilt 12.jpg", "Everbilt", .60, "1/2", "8");

DELETE FROM screw WHERE id = 1;

UPDATE screw
SET img_path = "assets/ScrewImg/Backer-On 3.jpg"
WHERE id = 4;

UPDATE screw
SET img_path = "assets/ScrewImg/Grip-Rite 3.jpg"
WHERE id = 3;