import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { appointmentsDescription } from './resources/appointments';
import { availabilityDescription } from './resources/availability';
import { customersDescription } from './resources/customers';
import { locationsDescription } from './resources/locations';
import { resourceGroupsDescription } from './resources/resource-groups';
import { resourcesDescription } from './resources/resources';
import { serviceGroupsDescription } from './resources/service-groups';
import { servicesDescription } from './resources/services';

export class OnschedConsumer implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'onsched-consumer',
		name: 'N8nDevOnschedConsumer',
		icon: { light: 'file:./onsched-consumer.svg', dark: 'file:./onsched-consumer.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Build secure and scalable custom apps for Online Booking. Our flexible API provides many options for availability and booking',
		defaults: { name: 'onsched-consumer' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevOnschedConsumerApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Appointments",
					"value": "Appointments",
					"description": ""
				},
				{
					"name": "Availability",
					"value": "Availability",
					"description": ""
				},
				{
					"name": "Customers",
					"value": "Customers",
					"description": ""
				},
				{
					"name": "Locations",
					"value": "Locations",
					"description": ""
				},
				{
					"name": "Resource Groups",
					"value": "Resource Groups",
					"description": ""
				},
				{
					"name": "Resources",
					"value": "Resources",
					"description": ""
				},
				{
					"name": "Service Groups",
					"value": "Service Groups",
					"description": ""
				},
				{
					"name": "Services",
					"value": "Services",
					"description": ""
				}
			],
			"default": ""
		},
		...appointmentsDescription,
		...availabilityDescription,
		...customersDescription,
		...locationsDescription,
		...resourceGroupsDescription,
		...resourcesDescription,
		...serviceGroupsDescription,
		...servicesDescription
		],
	};
}
