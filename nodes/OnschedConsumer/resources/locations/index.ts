import type { INodeProperties } from 'n8n-workflow';

export const locationsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Locations"
					]
				}
			},
			"options": [
				{
					"name": "GET Consumer v1 Locations",
					"value": "GET Consumer v1 Locations",
					"action": "List Locations",
					"description": "<p>Use this endpoint to return a <b>List of Business Locations</b>. The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20 and maximum is 100. Use the other query parameters to filter the results further. </p>\r\n<p>\r\n  <b>IMPORTANT DEPRECATION NOTICE</b>: The following online settings parameters were intended for internal use in our Portal application only. They will be deprecated on <b>OCTOBER 15, 2022</b>. These fields are currently part of the <b>SETTINGS</b> object in all location endpoints: <b>businessId, enabled, familyMembersEnabled, serviceLabel, resourceLabel, resourceAnyLabel, resourceSelection, liveMode, formFlow, availabilityForm, showServiceGroups, showOnSchedLogo, showBusinessLogo, disableAuthorization, hideNavBar, hideLocationNav, hideServiceGroupsNav, hideServicesNav, hideContinueBooking, returnToService, returnToAvailability, hideBreadCrumbNav.</b> If you are using these fields, please adjust your code to handle the deprecation or let us know by submitting a ticket to: <b><i>support@onsched.com</i></b> as we do not want to interrupt your existing workflows.</p>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/consumer/v1/locations"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /consumer/v1/locations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Locations"
					],
					"operation": [
						"GET Consumer v1 Locations"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "Location name (full or partial)",
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
						"Locations"
					],
					"operation": [
						"GET Consumer v1 Locations"
					]
				}
			}
		},
		{
			"displayName": "Nearest To",
			"name": "nearestTo",
			"description": "Search by distance nearest Geocoords, City, Postal/Zip Code",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "nearestTo",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Locations"
					],
					"operation": [
						"GET Consumer v1 Locations"
					]
				}
			}
		},
		{
			"displayName": "Proximity",
			"name": "proximity",
			"description": "Maximum distance to display",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "proximity",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Locations"
					],
					"operation": [
						"GET Consumer v1 Locations"
					]
				}
			}
		},
		{
			"displayName": "Units",
			"name": "units",
			"description": "Distance either imperial(miles), metric(kilometers)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "units",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Locations"
					],
					"operation": [
						"GET Consumer v1 Locations"
					]
				}
			}
		},
		{
			"displayName": "Service ID",
			"name": "serviceId",
			"description": "Locations that offer this service",
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
						"Locations"
					],
					"operation": [
						"GET Consumer v1 Locations"
					]
				}
			}
		},
		{
			"displayName": "Friendly ID",
			"name": "friendlyId",
			"description": "Frienldy Id of location",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "friendlyId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Locations"
					],
					"operation": [
						"GET Consumer v1 Locations"
					]
				}
			}
		},
		{
			"displayName": "Region ID",
			"name": "regionId",
			"description": "Locations within a specific region",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "regionId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Locations"
					],
					"operation": [
						"GET Consumer v1 Locations"
					]
				}
			}
		},
		{
			"displayName": "Ignore Primary",
			"name": "ignorePrimary",
			"description": "Don't include the Primary Location",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "ignorePrimary",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Locations"
					],
					"operation": [
						"GET Consumer v1 Locations"
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
						"Locations"
					],
					"operation": [
						"GET Consumer v1 Locations"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "Page limit, default 20, max 100",
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
						"Locations"
					],
					"operation": [
						"GET Consumer v1 Locations"
					]
				}
			}
		},
];
