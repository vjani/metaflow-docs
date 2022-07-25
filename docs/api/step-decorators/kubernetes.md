# @kubernetes

The `@kubernetes` decorator sends a step for execution on a [Kubernetes](https://kubernetes.io) cluster. For more information, see [Effortless Scaling with Kubernetes](/metaflow/scaling-out-and-up/effortless-scaling-with-kubernetes).

<!-- WARNING: THIS FILE WAS AUTOGENERATED! DO NOT EDIT! Instead, edit the notebook w/the location & name as this file. -->


<DocSection type="decorator" name="kubernetes" module="metaflow" show_import="True" heading_level="3" link="https://github.com/Netflix/metaflow/tree/master/metaflow/plugins/kubernetes/kubernetes_decorator.py#L36">
<SigArgSection>
<SigArg name="..." />
</SigArgSection>
<Description summary="Specifies that this step should execute on Kubernetes." />
<ParamSection name="Parameters">
	<Parameter name="cpu" type="int" desc="Number of CPUs required for this step. Defaults to 1. If `@resources` is\nalso present, the maximum value from all decorators is used." />
	<Parameter name="memory" type="int" desc="Memory size (in MB) required for this step. Defaults to 4096 (4GB). If\n`@resources` is also present, the maximum value from all decorators is\nused." />
	<Parameter name="disk" type="int" desc="Disk size (in MB) required for this step. Defaults to 10GB. If\n`@resources` is also present, the maximum value from all decorators is\nused." />
	<Parameter name="image" type="string" desc="Docker image to use when launching on Kubernetes. If not specified, a\ndefault Docker image mapping to the current version of Python is used." />
</ParamSection>
</DocSection>
