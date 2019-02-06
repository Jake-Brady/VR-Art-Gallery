BEGIN TRANSACTION;
UPDATE galleries 
    SET gallery_name = $3, 
        thumbnail = $4,
        is_private = $2
    WHERE id = $1;

UPDATE gallery_presets
    SET wall_texture = $8,
        floor_texture = $7,
        atmosphere_lighting = $6,
        music = $5
    WHERE gallery_id = $1;

UPDATE images
    SET image1 = $9,
        image2 = $10,
        image3 = $11,
        image4 = $12,
        image5 = $13,
        image6 = $14,
        image7 = $15,
        image8 = $16,
        image9 = $17,
        image10 = $18,
        image11 = $19,
        image12 = $20,
        image13 = $21,
        image14 = $22,
        image15 = $23
    WHERE gallery_id = $1;

UPDATE captions
    SET img1_caption = $24,
        img2_caption = $25,
        img3_caption = $26,
        img4_caption = $27,
        img5_caption = $28,
        img6_caption = $29,
        img7_caption = $30,
        img8_caption = $31,
        img9_caption = $32,
        img10_caption = $33,
        img11_caption = $34,
        img12_caption = $35,
        img13_caption = $36,
        img14_caption = $37,
        img15_caption = $38
    FROM images
    WHERE 
        images.id = captions.images_id AND
        images.gallery_id = $1;
COMMIT;

