import type { INodeProperties } from 'n8n-workflow';

export const servicesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Services"
					]
				}
			},
			"options": [
				{
					"name": "GET Consumer v1 Services",
					"value": "GET Consumer v1 Services",
					"action": "List Services",
					"description": "<p>Use this endpoint to <b>List Services</b> available at your business location and/or company. If not specified, the business location defaults to the primary business location. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/consumer/v1/services"
						}
					}
				},
				{
					"name": "GET Consumer v1 Services Allocations",
					"value": "GET Consumer v1 Services Allocations",
					"action": "Get Service Allocation",
					"description": "<p>Use this endpoint to return a <b>Service Allocation</b> object. A valid <b>serviceAllocation id</b> is required. Find service allocation id's by using the <i>GET/consumer​/v1​/services​/{id}​/allocations</i> endpoint.</p>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/consumer/v1/services/allocations/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "GET Consumer v1 Services Resources",
					"value": "GET Consumer v1 Services Resources",
					"action": "List Resources for Service",
					"description": "<p>Use this endpoint to return a list of <b>Resources that provide the Service requested</b>. A valid <b>service id</b> is required. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/consumer/v1/services/{{$parameter[\"id\"]}}/resources"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /consumer/v1/services",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Services"
					],
					"operation": [
						"GET Consumer v1 Services"
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
						"Services"
					],
					"operation": [
						"GET Consumer v1 Services"
					]
				}
			}
		},
		{
			"displayName": "Service Group ID",
			"name": "serviceGroupId",
			"description": "Filter by groupId",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "serviceGroupId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Services"
					],
					"operation": [
						"GET Consumer v1 Services"
					]
				}
			}
		},
		{
			"displayName": "Default Service",
			"name": "defaultService",
			"description": "Filter by default service, default is false",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "defaultService",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Services"
					],
					"operation": [
						"GET Consumer v1 Services"
					]
				}
			}
		},
		{
			"displayName": "All Locations",
			"name": "allLocations",
			"description": "Search All Locations, default is false",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "allLocations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Services"
					],
					"operation": [
						"GET Consumer v1 Services"
					]
				}
			}
		},
		{
			"displayName": "Scope",
			"name": "scope",
			"description": "Filter by scope, Company, Location or All, default is All",
			"default": "company",
			"type": "options",
			"options": [
				{
					"name": "Company",
					"value": "company"
				},
				{
					"name": "Location",
					"value": "location"
				},
				{
					"name": "All",
					"value": "all"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "scope",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Services"
					],
					"operation": [
						"GET Consumer v1 Services"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "Filter by Name, supports Partial name search",
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
						"Services"
					],
					"operation": [
						"GET Consumer v1 Services"
					]
				}
			}
		},
		{
			"displayName": "Service ID",
			"name": "serviceId",
			"description": "Filter by ServiceId, using this parameter would ignore all other parameters",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "serviceId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Services"
					],
					"operation": [
						"GET Consumer v1 Services"
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
						"Services"
					],
					"operation": [
						"GET Consumer v1 Services"
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
						"Services"
					],
					"operation": [
						"GET Consumer v1 Services"
					]
				}
			}
		},
		{
			"displayName": "Sort Order",
			"name": "sortOrder",
			"description": "Sort results using Natural Sort or Sorted alphabetically by Service Names, default is natural",
			"default": "natural",
			"type": "options",
			"options": [
				{
					"name": "Natural",
					"value": "natural"
				},
				{
					"name": "Name",
					"value": "name"
				}
			],
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
						"Services"
					],
					"operation": [
						"GET Consumer v1 Services"
					]
				}
			}
		},
		{
			"displayName": "Sort Descending",
			"name": "sortDescending",
			"description": "Sort results in Descending Order, default true",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "sortDescending",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Services"
					],
					"operation": [
						"GET Consumer v1 Services"
					]
				}
			}
		},
		{
			"displayName": "GET /consumer/v1/services/allocations/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Services"
					],
					"operation": [
						"GET Consumer v1 Services Allocations"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "id of serviceAllocation object",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Services"
					],
					"operation": [
						"GET Consumer v1 Services Allocations"
					]
				}
			}
		},
		{
			"displayName": "GET /consumer/v1/services/{id}/resources",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Services"
					],
					"operation": [
						"GET Consumer v1 Services Resources"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "id of service object",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Services"
					],
					"operation": [
						"GET Consumer v1 Services Resources"
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
						"Services"
					],
					"operation": [
						"GET Consumer v1 Services Resources"
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
						"Services"
					],
					"operation": [
						"GET Consumer v1 Services Resources"
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
						"Services"
					],
					"operation": [
						"GET Consumer v1 Services Resources"
					]
				}
			}
		},
];
