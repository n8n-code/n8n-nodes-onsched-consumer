import type { INodeProperties } from 'n8n-workflow';

export const availabilityDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Availability"
					]
				}
			},
			"options": [
				{
					"name": "GET Consumer v1 Availability",
					"value": "GET Consumer v1 Availability",
					"action": "Get Available Times",
					"description": "<p>\r\n  <b>Choose your search criteria carefully. Availability is an expensive call.</b> If you search availability for all resources, you should only do so for a single date. If you search availability for multiple dates, you should only do so for a specific resource by specifying the optional resourceId parameter.</p>\r\n<p>A <b>serviceId</b> is required. The <b>startDate</b> and <b>endDate</b> are required and are formatted as: <b>YYYY-MM-DD</b></p>\r\n<p>A <b>resourceId</b> is optional, it is recommended if known at the time of availability call.</p>\r\n<p>\r\n  <b>timezoneName</b> is optional, it allows you to specify the IANA formatted name for the end user's timezone to view availability. e.g., <i>America/New_York</i>. <b>NOTE: This is the recommended approach for your implementation.</b>  The \"tzOffset\" parameter remains for backward compatibility.  For JavaScript, use moment.js in your client for ease of timezone detection and selection. For iOS, use the name property of the NSTimeZone returned from the localTimeZone method. For .NET, consider NodaTime or TimeZoneConverter via NuGet. </p>\r\n<p>\r\n  <b>duration</b> should only be populated if you allow the end user to select a duration, otherwise the service's duration will be used.</p>\r\n<p>\r\n  <b>startTime</b> and <b>endTime</b> are optional and are specified in <b>military time e.g., 800 = 8:00am, 2230 = 10:30pm</b>. Note: You will only see availability within the boundary of your business location start and end times.</p>\r\n<p>\r\n  <b>dayAvailability</b> will return day level availability for the number of days requested from the start date. See <i>GET /consumer/v1/availability/{serviceId}/{startDate}/{endDate}/days</i> for details.</p>\r\n<p>\r\n  <b>firstDayAvailable</b> only works with day availability. If set to true it will look for the first day available within the range specified by the dayAvailability parameter. The two parameters together can be a clever way to display availability for a week or month. Tip - pass in the beginning of the week or month, and available times are displayed for the first available date if exists.</p>\r\n<p>\r\n  <b>tzOffset</b> allows you to pass in the timezone offset for the end user's timezone of choice, e.g., (-240) for EST. If you use this option, your application should be timezone aware. The requested timezone is specified as an offset (plus or minus) from GMT time.</p>\r\n<p>Availability can be complex. For further troubleshooting refer to the: <i><b>GET /consumer/v1/availability/{serviceId}/{startDate}/{endDate}/unavailable</b></i> endpoint. This endpoint will show you all unavailable times for a given date range. Available times are created from any unblocked time periods. For more information: <a href=\"https://onsched.readme.io/docs/availability-overview\">Availability Overview</a></p>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/consumer/v1/availability/{{$parameter[\"serviceId\"]}}/{{$parameter[\"startDate\"]}}/{{$parameter[\"endDate\"]}}"
						}
					}
				},
				{
					"name": "GET Consumer v1 Availability Days",
					"value": "GET Consumer v1 Availability Days",
					"action": "Get Available Days",
					"description": "<p>This endpoint will return <b>Day Level Availability</b> for the range of dates requested. For example, if the business is closed, or there is a public holiday this endpoint will return that the \"Day is unavailable\".</p>\r\n<p>Day Availability is a high-level check for Holidays and Open/Available hours of a location, service and/or resource and should be used to restrict your choices of days available in your application to improve usability and performance.</p>\r\n<p>A <b>serviceId</b> is required. The <b>startDate</b> and <b>endDate</b> are required and are formatted as: <b>YYYY-MM-DD</b></p>\r\n<p>The locationId is optional, however if not supplied it defaults to the Primary Business Location for open/closed hours information. It is recommended you always provide the locationId.</p>\r\n<p>A <b>resourceId</b> is optional. If used the available days will be return day availability for the resource specified.</p>\r\n<p>The <b>tzOffset</b> parameter should be used if the appointment requester, the end user, is in a different timezone than the location or resource.</p>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/consumer/v1/availability/{{$parameter[\"serviceId\"]}}/{{$parameter[\"startDate\"]}}/{{$parameter[\"endDate\"]}}/days"
						}
					}
				},
				{
					"name": "GET Consumer v1 Availability Unavailable",
					"value": "GET Consumer v1 Availability Unavailable",
					"action": "Get Unavailable Times",
					"description": "<p>This endpoint is used to show <b>Unavailable</b> times and provides valuable information as to why a time slot is unavailable. If you question your availability results, populate the same parameters to this endpoint to find out why.</p>\r\n<p>A <b>serviceId</b> is required. The <b>startDate</b> and <b>endDate</b> are required and are formatted as: <b>YYYY-MM-DD</b></p>\r\n<p>Location hours, holidays, services, resources, blocks, allocations, and appointments are just some of variables that may cause time slots to become unavailable. Use this endpoint to understand why you don't see availability.</p>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/consumer/v1/availability/{{$parameter[\"serviceId\"]}}/{{$parameter[\"startDate\"]}}/{{$parameter[\"endDate\"]}}/unavailable"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /consumer/v1/availability/{serviceId}/{startDate}/{endDate}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Availability"
					],
					"operation": [
						"GET Consumer v1 Availability"
					]
				}
			}
		},
		{
			"displayName": "Service ID",
			"name": "serviceId",
			"required": true,
			"description": "Service Id for availability search",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Availability"
					],
					"operation": [
						"GET Consumer v1 Availability"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"required": true,
			"description": "Format YYYY-MM-DD: Start Date for availability search",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Availability"
					],
					"operation": [
						"GET Consumer v1 Availability"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "endDate",
			"required": true,
			"description": "Format YYYY-MM-DD: End Date for availability search",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Availability"
					],
					"operation": [
						"GET Consumer v1 Availability"
					]
				}
			}
		},
		{
			"displayName": "Start Time",
			"name": "startTime",
			"description": "Format Military Time Start Time for availability search. Defaults to Business Hours Start",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "startTime",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Availability"
					],
					"operation": [
						"GET Consumer v1 Availability"
					]
				}
			}
		},
		{
			"displayName": "End Time",
			"name": "endTime",
			"description": "Format Military Time. End Time for availability search. Defaults to Business Hours End",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "endTime",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Availability"
					],
					"operation": [
						"GET Consumer v1 Availability"
					]
				}
			}
		},
		{
			"displayName": "Location ID",
			"name": "locationId",
			"description": "Id of business location, defaults to primary business location",
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
						"Availability"
					],
					"operation": [
						"GET Consumer v1 Availability"
					]
				}
			}
		},
		{
			"displayName": "Resource ID",
			"name": "resourceId",
			"description": "Resource Id for availability search",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "resourceId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Availability"
					],
					"operation": [
						"GET Consumer v1 Availability"
					]
				}
			}
		},
		{
			"displayName": "Resource Group ID",
			"name": "resourceGroupId",
			"description": "Resource Group Id for availability search",
			"default": "",
			"type": "string",
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
						"Availability"
					],
					"operation": [
						"GET Consumer v1 Availability"
					]
				}
			}
		},
		{
			"displayName": "Resource Ids",
			"name": "resourceIds",
			"description": "Comma separated Resource Id's for availability search",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "resourceIds",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Availability"
					],
					"operation": [
						"GET Consumer v1 Availability"
					]
				}
			}
		},
		{
			"displayName": "Round Robin",
			"name": "roundRobin",
			"description": "Round robin choice 0=none, 1=random, 2=balanced",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "roundRobin",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Availability"
					],
					"operation": [
						"GET Consumer v1 Availability"
					]
				}
			}
		},
		{
			"displayName": "Duration",
			"name": "duration",
			"description": "Duration of the service if different from default",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "duration",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Availability"
					],
					"operation": [
						"GET Consumer v1 Availability"
					]
				}
			}
		},
		{
			"displayName": "Interval",
			"name": "interval",
			"description": "Booking Interval if different than the default",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "interval",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Availability"
					],
					"operation": [
						"GET Consumer v1 Availability"
					]
				}
			}
		},
		{
			"displayName": "Timezone Name",
			"name": "timezoneName",
			"description": "Requested IANA timezone Id to view availability",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "timezoneName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Availability"
					],
					"operation": [
						"GET Consumer v1 Availability"
					]
				}
			}
		},
		{
			"displayName": "Tz Offset",
			"name": "tzOffset",
			"description": "Request timezone offset to view availability",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "tzOffset",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Availability"
					],
					"operation": [
						"GET Consumer v1 Availability"
					]
				}
			}
		},
		{
			"displayName": "Destination",
			"name": "destination",
			"description": "For calculating travel based availability, requires distance scope",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "destination",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Availability"
					],
					"operation": [
						"GET Consumer v1 Availability"
					]
				}
			}
		},
		{
			"displayName": "Day Availability Start Date",
			"name": "dayAvailabilityStartDate",
			"description": "Format YYYY-DD-YY: Start date for day availability, defaults to startDate",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "dayAvailabilityStartDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Availability"
					],
					"operation": [
						"GET Consumer v1 Availability"
					]
				}
			}
		},
		{
			"displayName": "Day Availability",
			"name": "dayAvailability",
			"description": "Number of days of day availability to return",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "dayAvailability",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Availability"
					],
					"operation": [
						"GET Consumer v1 Availability"
					]
				}
			}
		},
		{
			"displayName": "First Day Available",
			"name": "firstDayAvailable",
			"description": "Return available times for the first available day",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "firstDayAvailable",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Availability"
					],
					"operation": [
						"GET Consumer v1 Availability"
					]
				}
			}
		},
		{
			"displayName": "GET /consumer/v1/availability/{serviceId}/{startDate}/{endDate}/days",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Availability"
					],
					"operation": [
						"GET Consumer v1 Availability Days"
					]
				}
			}
		},
		{
			"displayName": "Service ID",
			"name": "serviceId",
			"required": true,
			"description": "Service Id for day availability search",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Availability"
					],
					"operation": [
						"GET Consumer v1 Availability Days"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"required": true,
			"description": "Format YYYY-MM-DD: Start Date for availability search",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Availability"
					],
					"operation": [
						"GET Consumer v1 Availability Days"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "endDate",
			"required": true,
			"description": "Format YYYY-MM-DD: End Date for availability search",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Availability"
					],
					"operation": [
						"GET Consumer v1 Availability Days"
					]
				}
			}
		},
		{
			"displayName": "Location ID",
			"name": "locationId",
			"description": "Id of business location, defaults to primary business location",
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
						"Availability"
					],
					"operation": [
						"GET Consumer v1 Availability Days"
					]
				}
			}
		},
		{
			"displayName": "Resource ID",
			"name": "resourceId",
			"description": "Resource Id to filter on",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "resourceId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Availability"
					],
					"operation": [
						"GET Consumer v1 Availability Days"
					]
				}
			}
		},
		{
			"displayName": "Tz Offset",
			"name": "tzOffset",
			"description": "Timezone offset to view availability for",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "tzOffset",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Availability"
					],
					"operation": [
						"GET Consumer v1 Availability Days"
					]
				}
			}
		},
		{
			"displayName": "GET /consumer/v1/availability/{serviceId}/{startDate}/{endDate}/unavailable",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Availability"
					],
					"operation": [
						"GET Consumer v1 Availability Unavailable"
					]
				}
			}
		},
		{
			"displayName": "Service ID",
			"name": "serviceId",
			"required": true,
			"description": "Service Id for availability search",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Availability"
					],
					"operation": [
						"GET Consumer v1 Availability Unavailable"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"required": true,
			"description": "Format YYYY-MM-DD: Start Date for unavailable time search",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Availability"
					],
					"operation": [
						"GET Consumer v1 Availability Unavailable"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "endDate",
			"required": true,
			"description": "Format YYYY-MM-DD: End Date for unavailable time search",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Availability"
					],
					"operation": [
						"GET Consumer v1 Availability Unavailable"
					]
				}
			}
		},
		{
			"displayName": "Location ID",
			"name": "locationId",
			"description": "Id of business location, defaults to primary business location",
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
						"Availability"
					],
					"operation": [
						"GET Consumer v1 Availability Unavailable"
					]
				}
			}
		},
		{
			"displayName": "Resource ID",
			"name": "resourceId",
			"description": "Resource Id to filter on",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "resourceId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Availability"
					],
					"operation": [
						"GET Consumer v1 Availability Unavailable"
					]
				}
			}
		},
		{
			"displayName": "Duration",
			"name": "duration",
			"description": "Duration of the service if different from default",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "duration",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Availability"
					],
					"operation": [
						"GET Consumer v1 Availability Unavailable"
					]
				}
			}
		},
		{
			"displayName": "Tz Offset",
			"name": "tzOffset",
			"description": "Request timezone offset to view unavailable times",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "tzOffset",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Availability"
					],
					"operation": [
						"GET Consumer v1 Availability Unavailable"
					]
				}
			}
		},
		{
			"displayName": "Skip Time Past Unavailability",
			"name": "skipTimePastUnavailability",
			"description": "Set as true to remove Time Past (TP) blocks in the response",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "skipTimePastUnavailability",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Availability"
					],
					"operation": [
						"GET Consumer v1 Availability Unavailable"
					]
				}
			}
		},
];
