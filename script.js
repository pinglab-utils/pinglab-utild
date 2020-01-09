/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 * 
 * For more information visit:
 * https://www.amcharts.com/
 * 
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end


// Create chart instance
var chart = am4core.create("chartdiv", am4charts.RadarChart);

// Add data
chart.data = [{'category': 'Diseases of the ear or mastoid process',
  'full': 2000,
  'value': 164},
 {'category': 'Diseases of the immune system', 'full': 2000, 'value': 259},
 {'category': 'Diseases of the blood or blood-forming organs',
  'full': 2000,
  'value': 270},
 {'category': 'Diseases of the respiratory system',
  'full': 2000,
  'value': 361},
 {'category': 'Diseases of the musculoskeletal system or connective tissue',
  'full': 2000,
  'value': 445},
 {'category': 'Pregnancy, childbirth or the puerperium',
  'full': 2000,
  'value': 514},
 {'category': 'Supplementary Chapter Traditional Medicine Conditions - Module I',
  'full': 2000,
  'value': 537},
 {'category': 'Diseases of the genitourinary system',
  'full': 2000,
  'value': 548},
 {'category': 'Diseases of the circulatory system',
  'full': 2000,
  'value': 593},
 {'category': 'Certain conditions originating in the perinatal period',
  'full': 2000,
  'value': 630},
 {'category': 'Endocrine, nutritional or metabolic diseases',
  'full': 2000,
  'value': 665},
 {'category': 'Diseases of the visual system', 'full': 2000, 'value': 736},
 {'category': 'Diseases of the skin', 'full': 2000, 'value': 824},
 {'category': 'Diseases of the nervous system', 'full': 2000, 'value': 873},
 {'category': 'Factors influencing health status or contact with health services',
  'full': 2000,
  'value': 880},
 {'category': 'Mental, behavioural or neurodevelopmental disorders',
  'full': 2000,
  'value': 882},
 {'category': 'External causes of morbidity or mortality',
  'full': 2000,
  'value': 984},
 {'category': 'Diseases of the digestive system', 'full': 2000, 'value': 989},
 {'category': 'Certain infectious or parasitic diseases',
  'full': 2000,
  'value': 1025},
 {'category': 'Symptoms, signs or clinical findings, not elsewhere classified',
  'full': 2000,
  'value': 1282},
 {'category': 'Neoplasms', 'full': 2000, 'value': 1303},
 {'category': 'Developmental anomalies', 'full': 2000, 'value': 1342},
 {'category': 'Injury, poisoning or certain other consequences of external causes',
  'full': 2000,
  'value': 1999}];

// Make chart not full circle
chart.startAngle = -90;
chart.endAngle = 180;
chart.innerRadius = am4core.percent(20);

// Set number format
chart.numberFormatter.numberFormat = "#.#";

// Create axes
var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "category";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.grid.template.strokeOpacity = 0;
categoryAxis.renderer.labels.template.horizontalCenter = "right";
categoryAxis.renderer.labels.template.fontWeight = 500;
/*categoryAxis.renderer.labels.template.adapter.add("fill", function(fill, target) {
  return (target.dataItem.index >= 0) ? chart.colors.getIndex(target.dataItem.index) : fill;
});
*/
categoryAxis.renderer.minGridDistance = 10;

var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
valueAxis.renderer.grid.template.strokeOpacity = 0;
valueAxis.min = 0;
valueAxis.max = 2000;
valueAxis.strictMinMax = true;

// Create series
var series1 = chart.series.push(new am4charts.RadarColumnSeries());
series1.dataFields.valueX = "full";
series1.dataFields.categoryY = "category";
series1.clustered = false;
series1.columns.template.fill = new am4core.InterfaceColorSet().getFor("alternativeBackground");
series1.columns.template.fillOpacity = 0.08;
series1.columns.template.cornerRadiusTopLeft = 40;
series1.columns.template.strokeWidth = 0;
series1.columns.template.radarColumn.cornerRadius = 40;

var series2 = chart.series.push(new am4charts.RadarColumnSeries());
series2.dataFields.valueX = "value";
series2.dataFields.categoryY = "category";
series2.clustered = false;
series2.columns.template.strokeWidth = 0;
series2.columns.template.tooltipText = "{category}: [bold]{value}[/]";
series2.columns.template.radarColumn.cornerRadius = 40;

series2.columns.template.adapter.add("fill", function(fill, target) {
  return chart.colors.getIndex(target.dataItem.index);
});

// Add cursor
chart.cursor = new am4charts.RadarCursor();
