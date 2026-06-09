import type { INodeProperties } from 'n8n-workflow';

export const serviceGroupsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Service Groups"
					]
				}
			},
			"options": [
				{
					"name": "GET Consumer V 1 Servicegroups",
					"value": "GET Consumer V 1 Servicegroups",
					"action": "List Service Groups",
					"description": "<p>Use this endpoint to return a list of <b>Service Groups</b> for the requested location. If not specified, the business location defaults to the primary business location. Use the offset and limit parameters to control the page start and size. Default offset is 0, limit is 20, maximum is 100. Use the other query parameters to filter the results further.</p>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/consumer/v1/servicegroups"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /consumer/v1/servicegroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Groups"
					],
					"operation": [
						"GET Consumer V 1 Servicegroups"
					]
				}
			}
		},
		{
			"displayName": "Location Id",
			"name": "locationId",
			"description": "id of business location, defaults to primary business location",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "locationId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Service Groups"
					],
					"operation": [
						"GET Consumer V 1 Servicegroups"
					]
				}
			}
		},
		{
			"displayName": "Offset",
			"name": "offset",
			"description": "Starting row of page, default 0",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "offset",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Service Groups"
					],
					"operation": [
						"GET Consumer V 1 Servicegroups"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "Page limit default 20, max 100",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Service Groups"
					],
					"operation": [
						"GET Consumer V 1 Servicegroups"
					]
				}
			}
		},
];
