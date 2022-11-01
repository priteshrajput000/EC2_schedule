
var AWS = require('aws-sdk');
const schedule = require('node-schedule');
AWS.config.update({
  aws_access_key_id : 'AKIATKOWCMYTTDQIMK6G',
  aws_secret_access_key : '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',
   region: 'ap-south-1'});

   var params = {
    InstanceIds: [
       "i-0c2f40ab9dbb1f88f", "i-01677788880e8c7cb"
    ]
   };
   var ec2 = new AWS.EC2({apiVersion: '2016-11-15'});

   schedule.scheduleJob('14 12 * * 1-6', function(){
    ec2.startInstances(params, function(err, data) {
      if (err) {
        console.log(err, err.stack);
        }                                 // an error occurred
      else {  
        console.log('Instance is successfully started!');
        console.log(data);}               // successful Start response 
    });
    
    
   });

   schedule.scheduleJob('16 12 * * 1-6', function(){
    ec2.stopInstances(params, function(err, data) {
      if (err) {
        console.log("Error", err);       // an error occurred
      } else {
        console.log("Server stopped Successfully");
        console.log(data);               // successful Stopped response 
      }
    
  });
   });
  //  ec2.startInstances(params, function(err, data) {
  //    if (err) console.log(err, err.stack); // an error occurred
  //    else     console.log(data);           // successful response
  //    /*
  //    data = {
  //     StartingInstances: [
  //        {
  //       CurrentState: {
  //        Code: 0, 
  //        Name: "pending"
  //       }, 
  //       InstanceId: "i-1234567890abcdef0", 
  //       PreviousState: {
  //        Code: 80, 
  //        Name: "stopped"
  //       }
  //      }
  //     ]
  //    }
  //    */
  //  });
// import { EC2Client, StopInstancesCommand } from "@aws-sdk/client-ec2"; 
// const { EC2Client, StartInstancesCommand, StopInstancesCommand } = require("@aws-sdk/client-ec2") ;

// const ec2Client = new EC2Client({ region: ap-south-1 });
// import { EC2Client, StopInstancesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
// const { EC2Client, StopInstancesCommand } = require("@aws-sdk/client-ec2"); 
// const client = new EC2Client();
// const command = new StopInstancesCommand(input);


// const params = { InstanceIds: ["i-0c2f40ab9dbb1f88f, i-01677788880e8c7cb"] };
// // const command = "START";

// const run = async () => {
//   const response = await client.send(command);
//   console.log(response);
//   return response;
  // if (command.toUpperCase() === "START") {
  //   try {
  //     const data = await ec2Client.send(new StartInstancesCommand(params));
  //     console.log("Success", data.StartingInstances);
  //     return data;
  //   } catch (err) {
  //     console.log("Error2", err);
  //   }
  // } else if (process.argv[2].toUpperCase() === "STOP") {
  //   try {
  //     const data = await ec2Client.send(new StopInstancesCommand(params));
  //     console.log("Success", data.StoppingInstances);
  //     return data;
  //   } catch (err) {
  //     console.log("Error", err);
  //   }
  // }
// };
// run();
