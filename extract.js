
var fs = require('fs'),
    xml2js = require('xml2js'),
    csv = require('csv')
    ;

var parser = new xml2js.Parser();

var columns = ['nct_id', 'brief_title', 'condition', 'drug', 'received_date', 'lastchanged', 'has_results']
var fo = csv().to.path('data/extracted.csv');
fo.write(columns);

parser.on('end', function(result) {
  result = result.clinical_study;
  var out = {
    nct_id: result.id_info[0].nct_id[0],
    brief_title: result.brief_title[0],
    condition: result.condition[0],
    drug: result.intervention[0].intervention_name[0],
    received_date: result.firstreceived_date[0],
    lastchanged: result.lastchanged_date[0],
    has_results: (result.clinical_results && result.clinical_results[0].outcome_list != undefined ? 1 : 0)
  };
  out = columns.map(function(item) {
    return out[item]
  });
  fo.write(out);
});

function extractAll() {
  var dir = 'cache/2013-02-02';
  var count = 0;
  var files = fs.readdirSync(dir);
  files.sort();
  files.every(function(file) {
    count += 1;
    if (count > 20) return false;
    var data = fs.readFileSync(dir + '/' + file, 'utf8')
    parser.parseString(data);
    if (count % 500 == 0) {
      console.log(count);
    }
    return true;
  });
}

function test() {
  // fs.readFile(__dirname + '/data/NCT00000102.xml', function(err, data) {
  //  parser.parseString(data);
  // });

  fs.readFile(__dirname + '/data/NCT01101477.xml', function(err, data) {
    parser.parseString(data);
  });
}

extractAll();

