
--
-- Structure for table uploadimage_options
--

DROP TABLE IF EXISTS uploadimage_options;
CREATE TABLE uploadimage_options (
id_options int(6) NOT NULL,
strict SMALLINT NOT NULL,
responsive SMALLINT NOT NULL,
checkimageorigin SMALLINT NOT NULL,
modal SMALLINT NOT NULL,
guides SMALLINT NOT NULL,
highlight SMALLINT NOT NULL,
background SMALLINT NOT NULL,
autocrop SMALLINT NOT NULL,
dragcrop SMALLINT NOT NULL,
movable SMALLINT NOT NULL,
rotatable SMALLINT NOT NULL,
zoomable SMALLINT NOT NULL,
touchdragzoom SMALLINT NOT NULL,
mousewheelzoom SMALLINT NOT NULL,
cropboxmovable SMALLINT NOT NULL,
cropboxresizable SMALLINT NOT NULL,
doubleclicktoggle SMALLINT NOT NULL,
width int(11) NOT NULL default '0',
height int(11) NOT NULL default '0',
x int(11) NOT NULL default '0',
y int(11) NOT NULL default '0',
ratio varchar(50) NOT NULL default '',
fieldName varchar(50) NOT NULL default '',
PRIMARY KEY (id_options)
);
