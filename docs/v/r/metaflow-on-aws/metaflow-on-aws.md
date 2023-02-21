# Metaflow on AWS

Traditionally, there has been a tension between local \(e.g. on a laptop\) and remote \(e.g. on a cluster or a cloud\) development and execution: Developing on a laptop is fast, whereas iterating with a remote cluster is slower. A laptop is a severely resource-constrained environment whereas a cluster can have virtually unlimited resources. Worse, simple local scripts may need to be translated to a new paradigm that is understood by a cluster.

Metaflow tries to combine the best of both worlds. Most importantly, we support the same idiomatic R scripts both locally and remotely. No changes in code or libraries needed. However, Metaflow doesn't try to abstract away the fact that code is executed remotely. We believe that this is crucial in making troubleshooting easier.

Metaflow makes it easy to move back and forth between the local and remote modes of execution. You can even use a hybrid of the two approaches in a single workflow. This means that you can develop and test your Metaflow code similarly to any local R script - simply and easily. When you need to [process larger amounts of data](../metaflow/scaling.md), or you want to deploy your workflow to production, you can do it with a single line of code or a single command.

When you set up a cloud-based object store as the datastore, Metaflow snapshots all data and code in the cloud automatically. This means that you can [inspect](../metaflow/client.md), [resume](../metaflow/debugging.md#how-to-use-the-resume-command), and restore any previous Metaflow execution without having to worry that the fruits of your hard work get lost.

> Note that the R and Python versions of Metaflow work the same way on AWS since they both share the same AWS integrations. The instructions here and in the [Admin Docs](https://outerbounds.com/docs/admin) apply to both versions.

## Amazon Web Services

While technically Metaflow could work with any cloud provider, currently Metaflow supports only [Amazon Web Services](https://aws.amazon.com) as the remote backend, thanks to Netflix's decade-long experience with AWS.

The following table summarizes the integration between Metaflow and AWS:

| Service            | Local           | AWS                                                                                                                      |
| :----------------- | :-------------- | :----------------------------------------------------------------------------------------------------------------------- |
| **Datastore**      | Local Directory | [Amazon S3](https://aws.amazon.com/s3/)                                                                                  |
| **Compute**        | Local Process   | [AWS Batch](https://aws.amazon.com/batch/)                                                                               |
| **Metadata**       | Local Directory | [AWS Fargate](https://aws.amazon.com/fargate/) + [Amazon RDS](https://aws.amazon.com/rds)                                |
| **Notebooks**      | Local Notebook  | [Amazon Sagemaker Notebooks](https://aws.amazon.com/sagemaker/)                                                          |
| **Scheduling**     | -               | [AWS Step Functions](https://aws.amazon.com/step-functions/) + [Amazon EventBridge](https://aws.amazon.com/eventbridge/) |
| **Large-scale ML** | -               | [Sagemaker Models](https://aws.amazon.com/sagemaker/)\*                                                                  |
| **Hosting**        | -               | \*                                                                                                                       |

\(\*\) [available later](introduction/roadmap)

### **Datastore**

Datastore is a centralized data repository for all the data that's leveraged by and generated by Metaflow flows. In the local mode, all data artifacts are stored in a local directory. Metaflow integrates with Amazon S3 for cloud-scale storage so that you can process and persist larger amounts of data easily.

### Compute

Metaflow executes all steps in the flow as a separate local process in local mode. To run larger workloads which require resources that might not be available on a laptop \(think GPUs or 100s of GBs of RAM\), Metaflow integrates with AWS Batch to seamlessly run every step of the flow as a \(or many\) separate AWS Batch job\(s\).

### Metadata

Metaflow ships with a light-weight [metaflow service](https://github.com/Netflix/metaflow-service) that provides a centralized place to keep track of all flow executions. This metadata service is not strictly needed. Metaflow will use a local directory to keep track of all executions from your laptop, even if you are using Amazon S3 as datastore or AWS Batch for [compute](metaflow-on-aws.md#compute). You can use a local Jupyter notebook to interact with data artifacts from all your previous executions as well as currently running ones. However, deploying the metaflow service \(as well as Amazon S3 as datastore\) is helpful if you would like to share results with your peers and track your work without fear of losing any state.

At Netflix, all executions are logged in the metaflow service and all data artifacts are stored in Amazon S3, so that any data scientist can interface with anybody's work via the [client](../metaflow/client.md) and collaborate fruitfully. Also, a centralized metaflow service along with a data store like Amazon S3 makes it easy for data scientists at Netflix to use hosted notebooks to easily set-up dashboards to monitors their flows.

### Notebooks

We are a [big fan of Notebooks](https://netflixtechblog.com/notebook-innovation-591ee3221233) at Netflix. With Metaflow, users can easily create custom dashboards to monitor the execution of their Metaflow flows and track how their models are behaving in a very seamless manner. They can do that on their laptops with a local notebook or in the cloud with a hosted notebook solution. One such hosted solution is [Sagemaker Notebooks](https://aws.amazon.com/sagemaker/) by AWS. For notebooks hosted in the cloud, you would want to ensure that you have configured the [metaflow service](metaflow-on-aws.md#metadata) and are using Amazon S3 for [datastore](metaflow-on-aws.md#datastore).

### Scheduling

With Metaflow, users can create, prototype and execute flows from their laptops that can scale easily by leveraging elastic storage and compute capabilities in the cloud. Often, there comes a time, when these flows need to be run autonomously without any user intervention. At that point, Metaflow makes it easy to move the flow execution from Metaflow to AWS Step Functions to leverage all the feature sets that you get from a production grade scheduler - high availability, monitoring, reliability, etc. In addition, with AWS EventBridge, users can set triggers to execute these flows on a schedule automatically.

## Using Metaflow with AWS

When you install Metaflow for the first time, you start in the local mode. Artifacts and metadata are stored in a local directory and computation is performed with local processes. This mode is perfectly fine for personal use but if your use case involves more people and/or data, we recommend that you configure Metaflow to use AWS.

Even after Metaflow has been configured to use AWS, users can still choose to use local tools, e.g. for rapid prototyping. The easy back-and-forth between local and remote is a key value proposition of Metaflow. However, we recommend that you enable **metadata** and **datastore** to use AWS by default, which makes sure that all data stays persistent and everyone in the organization can benefit from the results of workflows.

Netflix uses this setup internally. To make the experience smoother, Netflix's data scientists are provided with a \(shared\) EC2 instance where they can develop and test Metaflow code with minimal latency between their development environment and S3. Note that many IDEs such as [VSCode](https://code.visualstudio.com/) or [RStudio](https://rstudio.com/) support execution on a remote instance natively.

## Next Steps

If your organization doesn't have an AWS account already, we provide a hosted sandbox environment where you can test Metaflow using your own code and data, to get a feel of the benefits of AWS. Read more in the section about [Metaflow Sandbox](metaflow-sandbox.md).

If your organization has an AWS account already, see our [deployment guide](https://outerbounds.com/docs/admin/metaflow-on-aws/deployment-guide) for detailed instructions on how to configure your account for Metaflow.

If you are already using Metaflow in your AWS account, and want to get started with how to manage various AWS resources, take a look at our [operations guide](https://outerbounds.com/docs/admin/metaflow-on-aws/operations-guide).