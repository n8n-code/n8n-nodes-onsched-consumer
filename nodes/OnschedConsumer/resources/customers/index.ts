import type { INodeProperties } from 'n8n-workflow';

export const customersDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					]
				}
			},
			"options": [
				{
					"name": "GET Consumer V 1 Customers",
					"value": "GET Consumer V 1 Customers",
					"action": "List Customers",
					"description": "<p>Use this endpoint to return a <b>List of Customers</b>. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/consumer/v1/customers"
						}
					}
				},
				{
					"name": "POST Consumer V 1 Customers",
					"value": "POST Consumer V 1 Customers",
					"action": "Create Customer",
					"description": "<p>Use this endpoint to <b>Create</b> a new Customer. A customer object is automatically created with the first appointment booking if it doesn't already exist. If not specified, the business location id defaults to the primary business location.</p>\r\n<p>Required Fields: <b>Email</b> and <b>Name</b> or <b>First and Lastname</b> depending on customer type. Type 0 = Person, Type 1 = Business. For type 0, the firstname and lastname fields are used. For type 1, the Name field is used, and the name field is also used to populate the lastname.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/consumer/v1/customers"
						}
					}
				},
				{
					"name": "GET Consumer V 1 Customers Bookingfields",
					"value": "GET Consumer V 1 Customers Bookingfields",
					"action": "Get Customer Booking Fields",
					"description": "<p>Use this endpoint to return <b>Customer Booking Fields</b>. Customer booking fields are stored with each customer object. They are used when the information collected during the booking is for a particular customer. Customer Booking Fields include any custom customer fields you define and want to capture with the Booking.</p>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/consumer/v1/customers/bookingfields"
						}
					}
				},
				{
					"name": "GET Consumer V 1 Customers Countries",
					"value": "GET Consumer V 1 Customers Countries",
					"action": "List Country Codes",
					"description": "<p>Use this endpoint to return a <b>List of Countries with their associated Country Code</b>. Country codes are based on the 2-character ANSI standard. If your countries of operation are not currently listed, contact us at <i><b>support@onsched.com</b></i>.</p>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/consumer/v1/customers/countries"
						}
					}
				},
				{
					"name": "GET Consumer V 1 Customers Customfields",
					"value": "GET Consumer V 1 Customers Customfields",
					"action": "Get Customer Custom Fields",
					"description": "<p>Use this endpoint to return <b>Customer Custom Fields</b>. Customer custom fields are stored with the customer object. They are used when the information collected during the booking is specific to a particular customer.</p>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/consumer/v1/customers/customfields"
						}
					}
				},
				{
					"name": "GET Consumer V 1 Customers States",
					"value": "GET Consumer V 1 Customers States",
					"action": "List Country States",
					"description": "<p>Use this endpoint to return a <b>List of Countries with their associated State Codes</b>. Supply a country code to filter results further. If states for your countries of operation are not currently listed, contact us at <i><b>support@onsched.com</b></i>.</p>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/consumer/v1/customers/states"
						}
					}
				},
				{
					"name": "DELETE Consumer V 1 Customers",
					"value": "DELETE Consumer V 1 Customers",
					"action": "Delete Customer",
					"description": "<p>Use this endpoint to permanently <b>Delete</b> a Customer object. A valid <b>customer id</b> is required.</p>",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/consumer/v1/customers/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "PUT Consumer V 1 Customers",
					"value": "PUT Consumer V 1 Customers",
					"action": "Update Customer",
					"description": "<p>Use this endpoint to <b>Update</b> a Customer object. A valid <b>customer id</b> is required. Note: Blank fields are not changed.</p>",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/consumer/v1/customers/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /consumer/v1/customers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"GET Consumer V 1 Customers"
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
						"Customers"
					],
					"operation": [
						"GET Consumer V 1 Customers"
					]
				}
			}
		},
		{
			"displayName": "Group Id",
			"name": "groupId",
			"description": "Filter by groupId",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "groupId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"GET Consumer V 1 Customers"
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
						"Customers"
					],
					"operation": [
						"GET Consumer V 1 Customers"
					]
				}
			}
		},
		{
			"displayName": "Lastname",
			"name": "lastname",
			"description": "Filter by lastname",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "lastname",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"GET Consumer V 1 Customers"
					]
				}
			}
		},
		{
			"displayName": "Deleted",
			"name": "deleted",
			"description": "Filter by deleted status",
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
						"Customers"
					],
					"operation": [
						"GET Consumer V 1 Customers"
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
						"Customers"
					],
					"operation": [
						"GET Consumer V 1 Customers"
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
						"Customers"
					],
					"operation": [
						"GET Consumer V 1 Customers"
					]
				}
			}
		},
		{
			"displayName": "POST /consumer/v1/customers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"POST Consumer V 1 Customers"
					]
				}
			}
		},
		{
			"displayName": "Address",
			"name": "address",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "address",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"POST Consumer V 1 Customers"
					]
				}
			}
		},
		{
			"displayName": "Contact",
			"name": "contact",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "contact",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"POST Consumer V 1 Customers"
					]
				}
			}
		},
		{
			"displayName": "Custom Fields",
			"name": "customFields",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "customFields",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"POST Consumer V 1 Customers"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"POST Consumer V 1 Customers"
					]
				}
			}
		},
		{
			"displayName": "Firstname",
			"name": "firstname",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "firstname",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"POST Consumer V 1 Customers"
					]
				}
			}
		},
		{
			"displayName": "Lastname",
			"name": "lastname",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "lastname",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"POST Consumer V 1 Customers"
					]
				}
			}
		},
		{
			"displayName": "Location Id",
			"name": "locationId",
			"type": "string",
			"default": "",
			"description": "",
			"routing": {
				"send": {
					"property": "locationId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"POST Consumer V 1 Customers"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"POST Consumer V 1 Customers"
					]
				}
			}
		},
		{
			"displayName": "Notification Type",
			"name": "notificationType",
			"type": "string",
			"default": "",
			"description": "0 = default(Email), 1 = Email, 2 = SMS, 3 = Email and SMS",
			"routing": {
				"send": {
					"property": "notificationType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"POST Consumer V 1 Customers"
					]
				}
			}
		},
		{
			"displayName": "Send Lead Notification",
			"name": "sendLeadNotification",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "sendLeadNotification",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"POST Consumer V 1 Customers"
					]
				}
			}
		},
		{
			"displayName": "Stripe Customer Id",
			"name": "stripeCustomerId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "stripeCustomerId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"POST Consumer V 1 Customers"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"POST Consumer V 1 Customers"
					]
				}
			}
		},
		{
			"displayName": "GET /consumer/v1/customers/bookingfields",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"GET Consumer V 1 Customers Bookingfields"
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
						"Customers"
					],
					"operation": [
						"GET Consumer V 1 Customers Bookingfields"
					]
				}
			}
		},
		{
			"displayName": "GET /consumer/v1/customers/countries",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"GET Consumer V 1 Customers Countries"
					]
				}
			}
		},
		{
			"displayName": "GET /consumer/v1/customers/customfields",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"GET Consumer V 1 Customers Customfields"
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
						"Customers"
					],
					"operation": [
						"GET Consumer V 1 Customers Customfields"
					]
				}
			}
		},
		{
			"displayName": "Lead Questions",
			"name": "leadQuestions",
			"description": "A true/false indicator to filter on custom fields used for lead questions",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "leadQuestions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"GET Consumer V 1 Customers Customfields"
					]
				}
			}
		},
		{
			"displayName": "GET /consumer/v1/customers/states",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"GET Consumer V 1 Customers States"
					]
				}
			}
		},
		{
			"displayName": "Country",
			"name": "country",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "country",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"GET Consumer V 1 Customers States"
					]
				}
			}
		},
		{
			"displayName": "DELETE /consumer/v1/customers/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"DELETE Consumer V 1 Customers"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "id of customer object",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"DELETE Consumer V 1 Customers"
					]
				}
			}
		},
		{
			"displayName": "PUT /consumer/v1/customers/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"PUT Consumer V 1 Customers"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "id of customer object",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"PUT Consumer V 1 Customers"
					]
				}
			}
		},
		{
			"displayName": "Address",
			"name": "address",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "address",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"PUT Consumer V 1 Customers"
					]
				}
			}
		},
		{
			"displayName": "Contact",
			"name": "contact",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "contact",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"PUT Consumer V 1 Customers"
					]
				}
			}
		},
		{
			"displayName": "Custom Fields",
			"name": "customFields",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "customFields",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"PUT Consumer V 1 Customers"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"PUT Consumer V 1 Customers"
					]
				}
			}
		},
		{
			"displayName": "Firstname",
			"name": "firstname",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "firstname",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"PUT Consumer V 1 Customers"
					]
				}
			}
		},
		{
			"displayName": "Lastname",
			"name": "lastname",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "lastname",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"PUT Consumer V 1 Customers"
					]
				}
			}
		},
		{
			"displayName": "Location Id",
			"name": "locationId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "locationId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"PUT Consumer V 1 Customers"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"PUT Consumer V 1 Customers"
					]
				}
			}
		},
		{
			"displayName": "Notification Type",
			"name": "notificationType",
			"type": "string",
			"default": "",
			"description": "0 = default(Email), 1 = Email, 2 = SMS, 3 = Email and SMS",
			"routing": {
				"send": {
					"property": "notificationType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"PUT Consumer V 1 Customers"
					]
				}
			}
		},
		{
			"displayName": "Stripe Customer Id",
			"name": "stripeCustomerId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "stripeCustomerId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"PUT Consumer V 1 Customers"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"PUT Consumer V 1 Customers"
					]
				}
			}
		},
];
