import type { INodeProperties } from 'n8n-workflow';

export const resourceGroupsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Resource Groups"
					]
				}
			},
			"options": [
				{
					"name": "GET Consumer v1 Resourcegroups",
					"value": "GET Consumer v1 Resourcegroups",
					"action": "List Resource Groups",
					"description": "<p>Use this endpoint to return a list of <b>Resource Groups</b> for the requested location. If not specified, the business location defaults to the primary business location.</p>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/consumer/v1/resourcegroups"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /consumer/v1/resourcegroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Resource Groups"
					],
					"operation": [
						"GET Consumer v1 Resourcegroups"
					]
				}
			}
		},
		{
			"displayName": "Location ID",
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
						"Resource Groups"
					],
					"operation": [
						"GET Consumer v1 Resourcegroups"
					]
				}
			}
		},
		{
			"displayName": "Deleted",
			"name": "deleted",
			"description": "Filter results by deleted status",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "deleted",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Resource Groups"
					],
					"operation": [
						"GET Consumer v1 Resourcegroups"
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
						"Resource Groups"
					],
					"operation": [
						"GET Consumer v1 Resourcegroups"
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
						"Resource Groups"
					],
					"operation": [
						"GET Consumer v1 Resourcegroups"
					]
				}
			}
		},
];
