var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({
    aws_access_key_id : '************',
aws_secret_access_key : '********************',
    region: '*******'});

// Create EC2 service object
var ec2 = new AWS.EC2({apiVersion: '2016-11-15'});
// console.log(process.argv[2]);
// process.exit(0);
var params = {
  InstanceIds: [process.argv[3],process.argv[4]],
  DryRun: true
};

if (process.argv[2].toUpperCase() == "START") {
  // Call EC2 to start the selected instances
  ec2.startInstances(params, function(err, data) {
    if (err && err.code === 'DryRunOperation') {
      params.DryRun = false;
      ec2.startInstances(params, function(err, data) {
          if (err) {
            console.log("Error", err);
          } else if (data) {
            console.log("Server started Successfully", data.StartingInstances);
          }
      });
    } else {
      console.log("You don't have permission to start instances.");
    }
  });
} else if (process.argv[2].toUpperCase() == "STOP") {
  // Call EC2 to stop the selected instances
  ec2.stopInstances(params, function(err, data) {
    if (err && err.code === 'DryRunOperation') {
      params.DryRun = false;
      ec2.stopInstances(params, function(err, data) {
          if (err) {
            console.log("Error", err);
          } else if (data) {
            console.log("Server stopped Successfully", data.StoppingInstances);
          }
      });
    } else {
      console.log("You don't have permission to stop instances");
    }
  });
}
