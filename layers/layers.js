var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CLA2_1 = new ol.format.GeoJSON();
var features_CLA2_1 = format_CLA2_1.readFeatures(json_CLA2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CLA2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLA2_1.addFeatures(features_CLA2_1);
var lyr_CLA2_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CLA2_1, 
                style: style_CLA2_1,
                interactive: true,
                title: '<img src="styles/legend/CLA2_1.png" /> CLA-2'
            });

lyr_OSMStandard_0.setVisible(true);lyr_CLA2_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_CLA2_1];
lyr_CLA2_1.set('fieldAliases', {'Name': 'Name', 'cla_excel_S.no': 'cla_excel_S.no', 'cla_excel_coordinates': 'cla_excel_coordinates', 'cla_excel_east': 'cla_excel_east', 'cla_excel_location': 'cla_excel_location', });
lyr_CLA2_1.set('fieldImages', {'Name': 'TextEdit', 'cla_excel_S.no': 'Range', 'cla_excel_coordinates': 'TextEdit', 'cla_excel_east': 'TextEdit', 'cla_excel_location': 'TextEdit', });
lyr_CLA2_1.set('fieldLabels', {'Name': 'no label', 'cla_excel_S.no': 'no label', 'cla_excel_coordinates': 'no label', 'cla_excel_east': 'no label', 'cla_excel_location': 'no label', });
lyr_CLA2_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});