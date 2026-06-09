import type { INodeProperties } from 'n8n-workflow';

export const resourcesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Resources"
					]
				}
			},
			"options": [
				{
					"name": "GET Consumer v1 Resources",
					"value": "GET Consumer v1 Resources",
					"action": "List Resources",
					"description": "<p>Use this endpoint to return a <b>List of Resources</b> associated with a business location. If not specified, the business location defaults to the primary business location. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/consumer/v1/resources"
						}
					}
				},
				{
					"name": "GET Consumer v1 Resources Services",
					"value": "GET Consumer v1 Resources Services",
					"action": "Get Resource Linked Services",
					"description": "<p>Use this endpoint to get a <b>List of Linked Services</b> associated with the resource requested. The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, limit is 20, the maximum limit is 100. Use the other query parameters to filter the results further.</p>\r\n<p>Resource linked services are used to explicitly define the services that can be booked for a specified resource. By default, all services are bookable for any resource. For more information: <a href=\"https://docs.onsched.com/docs/linked-services\">Linked Services Overview</a></p>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/consumer/v1/resources/{{$parameter[\"id\"]}}/services"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /consumer/v1/resources",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Resources"
					],
					"operation": [
						"GET Consumer v1 Resources"
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
						"Resources"
					],
					"operation": [
						"GET Consumer v1 Resources"
					]
				}
			}
		},
		{
			"displayName": "Resource Group ID",
			"name": "resourceGroupId",
			"description": "Filter by groupId",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "resourceGroupId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Resources"
					],
					"operation": [
						"GET Consumer v1 Resources"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"description": "Filter by email address",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "email",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Resources"
					],
					"operation": [
						"GET Consumer v1 Resources"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "Search by name, supports Partial name search",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Resources"
					],
					"operation": [
						"GET Consumer v1 Resources"
					]
				}
			}
		},
		{
			"displayName": "Sort Order",
			"name": "sortOrder",
			"description": "Specify sort order of response",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sortOrder",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Resources"
					],
					"operation": [
						"GET Consumer v1 Resources"
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
						"Resources"
					],
					"operation": [
						"GET Consumer v1 Resources"
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
						"Resources"
					],
					"operation": [
						"GET Consumer v1 Resources"
					]
				}
			}
		},
		{
			"displayName": "GET /consumer/v1/resources/{id}/services",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Resources"
					],
					"operation": [
						"GET Consumer v1 Resources Services"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "id of resource object",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Resources"
					],
					"operation": [
						"GET Consumer v1 Resources Services"
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
						"Resources"
					],
					"operation": [
						"GET Consumer v1 Resources Services"
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
						"Resources"
					],
					"operation": [
						"GET Consumer v1 Resources Services"
					]
				}
			}
		},
];
