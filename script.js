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
chart.data = [{
  "category": "Symptoms, signs or clinical findings, not elsewhere classified",
  "value": 3919,
  "full": 4000
},{
  "category": "Developmental anomalies",
  "value": 2375,
  "full": 4000
},{
  "category": "Certain conditions originating in the perinatal period",
  "value": 1816,
  "full": 4000
},{
  "category": "Pregnancy, childbirth or the puerperium",
  "value": 2614,
  "full": 4000
},{
  "category": "Conditions related to sexual health",
  "value": 1079,
  "full": 4000
},{
  "category": "Diseases of the genitourinary system",
  "value": 1389,
  "full": 4000
},{
  "category": "Diseases of the musculoskeletal system or connective tissue",
  "value": 3554,
  "full": 4000
},{
  "category": "Diseases of the skin",
  "value": 1541,
  "full": 4000
},{
  "category": "Diseases of digestive system",
  "value": 1284,
  "full": 4000
},{
  "category": "Diseases of the respiratory system",
  "value": 2323,
  "full": 4000
}, {
  "category": "Diseases of the circulatory system",
  "value": 2871,
  "full": 4000
}, {
  "category": "Diseases of the ear or mastoid process",
  "value": 1094,
  "full": 4000
}, {
  "category": "Diseases of the visual system",
  "value": 2955,
  "full": 4000
}, {
  "category": "Diseases of the nervous system",
  "value": 2537,
  "full": 4000
},{
  "category": "Sleep-wake disorders",
  "value": 1200,
  "full": 4000
},{
  "category": "Mental, behavioural or neurodevelopmental disorders",
  "value": 3727,
  "full": 4000
}, {
  "category": "Endocrine, nutritional or metabolic diseases",
  "value": 2848,
  "full": 4000
}, {
  "category": "Diseases of the immune system",
  "value": 1061,
  "full": 4000
}, {
  "category": "Diseases of the blood or blood-forming organs",
  "value": 2942,
  "full": 4000
}, {
  "category": "Neoplasms",
  "value": 1324,
  "full": 4000
},{
  "category": "Certain infectious or parasitic diseases",
  "value": 1513,
  "full": 4000
}];

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
valueAxis.max = 4000;
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