---
title: "Event Collector"
full: true
---

# Event Collector

Event Collector ingests events sent by the SDK and writes these events to S3.

## Setup in AWS

Follow the steps below to use our AWS CloudFormation template to create the stack in your AWS account.

1. Go to CloudFormation in AWS console.

<br/>

2. Click `Create stack` on top right and choose `With new resources (standard)`.

<br/>

3. On the `Create stack` screen, choose `Template is ready` under `Prepare template` and `Amazon S3 URL` as `Template source`.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Provide S3 URL as `https://airblock-public-cf-templates.s3.amazonaws.com/airblock-kinesis-s3-data-ingestion-cf.json`. 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Click Next.

<br/>

4. On the `Specify stack details` screen, enter a `Stack name`.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; In the `Parameters` section, edit the `S3 Data bucket name` as desired. Since this bucket will be created, ensure its new and unique. You may leave the other parameters to their default values.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Click Next.

<br/>

5. On the `Configure stack options` screen, you may leave the options to their default values. Click Next. 

<br/>

6. On the `Review` screen, scroll to the end and accept `I acknowledge that AWS CloudFormation might create IAM resources`.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Click Submit. It will take a few seconds to create the stack.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **Once the `Status` becomes `CREATE_COMPLETE`, your event collector is ready**.

<br/>

7. We'll now get the URL that we need to provide in the javascript SDK. Click on `Stacks` in left menu and then click on your stack name. In the right pane, go to the `Resources` tab. Search for **"AirblockAPIGWRestAPI"** and click on its `Physical ID`. This will open the API Gateway details page. 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Click on `Stages` in the left menu, then expand the `prod` stage and click on `PUT`. 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Copy the `Invoke URL`. Use this URL as the `SERVER_URL` in the javascript SDK.


<br/>



## Test via Postman
You can use the text below as body in your `PUT` request (select `raw` and `JSON`).

After sending the request, go to the S3 bucket. You should see a ".json" file in folders created as per time.

```
{
    "Data":
    {
    "api_key": "a0003cdf2255a79681aaf309796c442f",
    "events": [
        {
            "uuid": "916be96d-4b92-4391-89d4-c1288bb2acc6",
            "event_time": 1685597458665,
            "event_type": "Event 1"
        },
        {
            "uuid": "916be96d-4b92-4391-89d4-c1288bb2acc6",
            "event_time": 1685597458665,
            "event_type": "Event 2"
        },
        {
            "uuid": "916be96d-4b92-4391-89d4-c1288bb2acc6",
            "event_time": 1685597458665,
            "event_type": "Event 3"
        }
    ]
    },
    "PartitionKey": 1
}
```
