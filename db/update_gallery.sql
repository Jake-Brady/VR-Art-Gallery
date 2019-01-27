BEGIN TRANSACTION;
UPDATE galleries 
    SET gallery_name = $3, 
        thumbnail = $4,
        is_private = $2
    WHERE id = $1;

UPDATE gallery_presets
    SET ceiling_texture = $8,
        wall_texture = $9,
        floor_texture = $7,
        atmosphere_lighting = $6,
        music = $5
    WHERE gallery_id = $1;

UPDATE images
    SET image1 = $10,
        image2 = $11,
        image3 = $12,
        image4 = $13,
        image5 = $14,
        image6 = $15,
        image7 = $16,
        image8 = $17,
        image9 = $18,
        image10 = $19,
        image11 = $20,
        image12 = $21,
        image13 = $22,
        image14 = $23,
        image15 = $24
    WHERE gallery_id = $1;

UPDATE captions
    SET img1_caption = $25,
        img2_caption = $26,
        img3_caption = $27,
        img4_caption = $28,
        img5_caption = $29,
        img6_caption = $30,
        img7_caption = $31,
        img8_caption = $32,
        img9_caption = $33,
        img10_caption = $34,
        img11_caption = $35,
        img12_caption = $36,
        img13_caption = $37,
        img14_caption = $38,
        img15_caption = $39
    FROM images
    WHERE 
        images.id = captions.images_id AND
        images.gallery_id = $1;
COMMIT;

