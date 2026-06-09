import type { INodeProperties } from 'n8n-workflow';

export const appointmentsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Appointments"
					]
				}
			},
			"options": [
				{
					"name": "GET Consumer v1 Appointments",
					"value": "GET Consumer v1 Appointments",
					"action": "Get Appointments",
					"description": "<p>Use this endpoint to return a <b>List of Appointments</b>. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further. For more information: <a href=\"https://onsched.readme.io/docs/appointments-overview\">Appointments Overview</a></p>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/consumer/v1/appointments"
						}
					}
				},
				{
					"name": "POST Consumer v1 Appointments",
					"value": "POST Consumer v1 Appointments",
					"action": "Create Appointment",
					"description": "<p>Use this endpoint to <b>Create</b> a new appointment. The appointment will be created with an \"IN\", Initial status. Posting an appointment with \"IN\" status requires minimal information and requires a \"PUT book\" call to complete the booking transaction, <i>PUT ​/consumer​/v1​/appointments​/{id}​/book</i>. Alternatively, you can post an appointment using the <b>completeBooking</b> option which completes the booking in one transaction, but it will require more data. The method you choose depends on your solutions workflow. </p>\r\n<p>\r\n  <b>StartDateTime</b> and <b>EndDateTime</b> are required. Use the ISO 8601 format for DateTime Timezone, e.g., <b>2016-10-30T09:00:00-5:00</b></p>\r\n<p>A valid <b>serviceId</b> is required. The serviceId provided must be valid for the location being booked. A valid serviceId is one that is scoped to a Primary Company Location or is associated with a Business Location</p>\r\n<p>OPTIONAL FIELDS INCLUDE: </p>\r\n<p>\r\n  <b>locationId</b> - if not supplied, the appointment will be posted to the primary business location. If you support multiple location, we recommend always supplying the locationId. </p>\r\n<p>\r\n  <b>resourceId</b> - not required when posting with an \"IN\" status but is required when the appointment is booked. Use <i>GET /consumer/v1/resources</i> for a list of resources. </p>\r\n<p>\r\n  <b>customerId</b> - if supplied the name and email will be retrieved from the customer record. </p>\r\n<p>\r\n  <b>BookedBy</b> - if not supplied the email address of the booked appointment is used or the ip address if no email address is provided. BookedBy is used in the Appointment Audit trail which can be viewed in the appointment object.</p>\r\n<p>\r\n  <b>Location</b> - is a string value representing the location of the appointment. It provides no added functionality in OnSched and should not be confused with locationId.</p>\r\n<p>\r\n  <b>TimezoneName</b> - if used timezoneName must be in IANA format, <i>America/New_York</i>. This is the timezone the appointment was booked in. Populating this information can help later in situations where appointments are booked before a Daylight Savings change. If no timezoneName is supplied, the Business Locations timezone will be used.</p>\r\n<p>\r\n  <b>COMPLETE BOOKING:</b> This parameter provides a mechanism for immediate booking with the POST appointment endpoint. To complete the booking in one transaction, populate the <b>completeBooking</b> parameter with a \"BK\", booked or an \"RS\", reserved status and provide an (<b>email</b> and <b>name</b>) or a <b>customerId</b> in the post body. Doing so will book the appointment and send notifications all in one transaction. <b>Note:</b> \"IN\" can also be used as a completeBooking option to support payment flows. With the \"IN\" option, notifications are NOT sent.</p>\r\n<p>For more information: <a href=\"https://onsched.readme.io/docs/appointments-overview\">Appointments Overview</a></p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/consumer/v1/appointments"
						}
					}
				},
				{
					"name": "GET Consumer v1 Appointments Bookingfields",
					"value": "GET Consumer v1 Appointments Bookingfields",
					"action": "Get Custom Fields Labels",
					"description": "<p>Use this endpoint to return a locations <b>Appointment Booking Fields</b>. Appointment booking fields are stored with each Appointment record. They are used when you need additional information collected during your booking process. It is tied to an appointment/visit and will be stored in the appointment record. Use the field name, type, and length to determine how to update these field values when posting an appointment.</p>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/consumer/v1/appointments/bookingfields"
						}
					}
				},
				{
					"name": "GET Consumer v1 Appointments Customfields",
					"value": "GET Consumer v1 Appointments Customfields",
					"action": "Get Custom Fields List",
					"description": "<p>Use this endpoint to return a locations <b>Appointment Custom Field</b> definitions. Appointment custom fields are stored with each appointment. They are used when the information collected during the booking is specific to a particular appointment/visit. The response will list the custom fields used (customField1 - 10), the field type (string, number, date, boolean) and the length of each one.</p>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/consumer/v1/appointments/customfields"
						}
					}
				},
				{
					"name": "DELETE Consumer v1 Appointments",
					"value": "DELETE Consumer v1 Appointments",
					"action": "Delete Appointment",
					"description": "<p>Use this endpoint to permanently <b>Delete</b> an appointment. Only appointments with a of \"IN\" status, initial, can be deleted. Past dated appointments cannot be deleted. A valid <b>appointment id</b> is required. Use the appointment id returned from the initial <i>POST /consumer/v1/appointments</i> endpoint.</p>\r\n<p>For more information: <a href=\"https://onsched.readme.io/docs/appointments-overview\">Appointment Overview</a></p>",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/consumer/v1/appointments/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "PUT Consumer v1 Appointments Book",
					"value": "PUT Consumer v1 Appointments Book",
					"action": "Book Appointment",
					"description": "<p>Use this endpoint to <b>Book</b> an appointment. Only appointments with an \"IN\" status, Initial, can be booked. A valid <b>appointment id</b> is required. Use the appointment id returned from the initial <i>POST /consumer/v1/appointments</i> endpoint. Other pertinent fields can also be updated at the time of booking by including them in the post body. <b>Note: If no name or email address was provided in the initial Post Appointment, it will be required in the post body.</b></p>\r\n<p>For more information: <a href=\"https://onsched.readme.io/docs/appointments-overview\">Appointments Overview</a></p>",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/consumer/v1/appointments/{{$parameter[\"id\"]}}/book"
						}
					}
				},
				{
					"name": "PUT Consumer v1 Appointments Cancel",
					"value": "PUT Consumer v1 Appointments Cancel",
					"action": "Cancel Appointment",
					"description": "<p>Use this endpoint to <b>Cancel</b> an appointment booking or reservation. Only appointments with a \"BK\", booked or \"RS\", reserved status can be cancelled. Past dated appointments cannot be cancelled. A valid <b>appointment id</b> is required. For more information: <a href=\"https://onsched.readme.io/docs/appointments-overview\">Appointment Overview</a></p>",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/consumer/v1/appointments/{{$parameter[\"id\"]}}/cancel"
						}
					}
				},
				{
					"name": "PUT Consumer v1 Appointments Confirm",
					"value": "PUT Consumer v1 Appointments Confirm",
					"action": "Confirm Appointment",
					"description": "<p>Use this endpoint to <b>Confirm</b> an appointment. This updates the boolean confirmed field to TRUE. <b>NOTE:</b> If the appointment status is set to \"RS\", Reserved, it also updates the status of the appointment to \"BK\", Booked. </p>\r\n<p>For more information: <a href=\"https://onsched.readme.io/docs/appointments-overview\">Appointment Overview</a></p>",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/consumer/v1/appointments/{{$parameter[\"id\"]}}/confirm"
						}
					}
				},
				{
					"name": "PUT Consumer v1 Appointments Noshow",
					"value": "PUT Consumer v1 Appointments Noshow",
					"action": "Set NoShow Status",
					"description": "<p>Use this endpoint to change the status of an appointment from \"BK\", Booked to <b>\"NS\", NoShow</b>. This gives API consumers a way to internally track No Show appointments. It provides no added functionality in OnSched.</p>\r\n<p>For more information: <a href=\"https://onsched.readme.io/docs/appointments-overview\">Appointment Overview</a></p>",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/consumer/v1/appointments/{{$parameter[\"id\"]}}/noshow"
						}
					}
				},
				{
					"name": "PUT Consumer v1 Appointments Reschedule",
					"value": "PUT Consumer v1 Appointments Reschedule",
					"action": "Reschedule Appointment",
					"description": "<p>Use this endpoint to <b>Reschedule</b> an appointment booking. Only appointments in \"BK\", booked status, can be Rescheduled. Past dated appointments cannot be rescheduled. A valid <b>appointment id</b> is required.</p>\r\n<p>The <b>StartDateTime</b> and <b>EndDateTime</b> are required. Use the ISO 8601 format for DateTime Timezone, e.g., <b>2016-10-30T09:00:00-5:00</b>.</p>\r\n<p>The serviceId is optional. If changing the <b>serviceId</b>, the new service id's duration must match the original service's duration.</p>\r\n<p>The resourceId is optional. If changing the <b>resourceId</b>, verify the availability of the new resource prior to rescheduling.</p>\r\n<p>\r\n  <b>IMPORTANT:</b> Always run availability before rescheduling an appointment to verify the timeslot is open and available for the new time, service and/or resource requested. This is the only way to assure the slot is available. You cannot reschedule an appointment to a different location. If necessary, you should cancel and then book an appointment in the other location.</p>\r\n<p>For more information: <a href=\"https://onsched.readme.io/docs/appointments-overview\">Appointment Overview</a></p>",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/consumer/v1/appointments/{{$parameter[\"id\"]}}/reschedule"
						}
					}
				},
				{
					"name": "PUT Consumer v1 Appointments Reserve",
					"value": "PUT Consumer v1 Appointments Reserve",
					"action": "Reserve Appointment",
					"description": "<p>Use this endpoint to <b>Reserve</b> an appointment. Only appointments with an \"IN\" status, Initial, can be reserved. A valid <b>appointment id</b> is required. Use the appointment id returned from the initial <i>POST /consumer/v1/appointments</i> endpoint.</p>\r\n<p>\r\n  <b>NOTE: Reservations are different from Bookings as reservations are a two-step booking process that must be managed by the API consumer.</b> An appointment that is reserved is not completely booked until other business conditions have been met. For example, an appointment may be reserved if it is not yet assigned to a resource or until the customer or resource explicitly confirms it.</p>\r\n<p>With reservations you have the ability to notify the customer of a reservation prior to officially booking and the workflow can be designed to indicate what conditions will need to be met in order to convert the reservation to a complete booking. A reservation converts to a complete booking when it is either Confirmed or Booked. </p>\r\n<p>\r\n  <b>IMPORTANT: A reserved appointment time will not be released, i.e., become available to others, until it is Cancelled. The booking timer is not used with reserved appointments.</b>\r\n</p>\r\n<p>For more information: <a href=\"https://onsched.readme.io/docs/appointments-overview\">Appointments Overview</a></p>",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/consumer/v1/appointments/{{$parameter[\"id\"]}}/reserve"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /consumer/v1/appointments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Appointments"
					],
					"operation": [
						"GET Consumer v1 Appointments"
					]
				}
			}
		},
		{
			"displayName": "Location ID",
			"name": "locationId",
			"description": "id of business location",
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
						"Appointments"
					],
					"operation": [
						"GET Consumer v1 Appointments"
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
						"Appointments"
					],
					"operation": [
						"GET Consumer v1 Appointments"
					]
				}
			}
		},
		{
			"displayName": "Lastname",
			"name": "lastname",
			"description": "Filter by lastname or part of it",
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
						"Appointments"
					],
					"operation": [
						"GET Consumer v1 Appointments"
					]
				}
			}
		},
		{
			"displayName": "Phone",
			"name": "phone",
			"description": "Filter by phone number or part of it",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "phone",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Appointments"
					],
					"operation": [
						"GET Consumer v1 Appointments"
					]
				}
			}
		},
		{
			"displayName": "Service ID",
			"name": "serviceId",
			"description": "Filter by service",
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
						"Appointments"
					],
					"operation": [
						"GET Consumer v1 Appointments"
					]
				}
			}
		},
		{
			"displayName": "Calendar ID",
			"name": "calendarId",
			"description": "Filter by calendar",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "calendarId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Appointments"
					],
					"operation": [
						"GET Consumer v1 Appointments"
					]
				}
			}
		},
		{
			"displayName": "Resource ID",
			"name": "resourceId",
			"description": "Filter by resource",
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
						"Appointments"
					],
					"operation": [
						"GET Consumer v1 Appointments"
					]
				}
			}
		},
		{
			"displayName": "Customer ID",
			"name": "customerId",
			"description": "Filter by customer",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "customerId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Appointments"
					],
					"operation": [
						"GET Consumer v1 Appointments"
					]
				}
			}
		},
		{
			"displayName": "Service Allocation ID",
			"name": "serviceAllocationId",
			"description": "Filter by service allocation",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "serviceAllocationId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Appointments"
					],
					"operation": [
						"GET Consumer v1 Appointments"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"description": "Format YYYY-MM-DD. Filter by on/after startDate",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "startDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Appointments"
					],
					"operation": [
						"GET Consumer v1 Appointments"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "endDate",
			"description": "Format YYYY-MM-DD. Filter on/before endDate",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "endDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Appointments"
					],
					"operation": [
						"GET Consumer v1 Appointments"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"description": "Filter by status: IN, BK, CN, RE, RS",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "status",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Appointments"
					],
					"operation": [
						"GET Consumer v1 Appointments"
					]
				}
			}
		},
		{
			"displayName": "Booked By",
			"name": "bookedBy",
			"description": "Filter by the email of who booked",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "bookedBy",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Appointments"
					],
					"operation": [
						"GET Consumer v1 Appointments"
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
						"Appointments"
					],
					"operation": [
						"GET Consumer v1 Appointments"
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
						"Appointments"
					],
					"operation": [
						"GET Consumer v1 Appointments"
					]
				}
			}
		},
		{
			"displayName": "POST /consumer/v1/appointments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Appointments"
					],
					"operation": [
						"POST Consumer v1 Appointments"
					]
				}
			}
		},
		{
			"displayName": "Complete Booking",
			"name": "completeBooking",
			"description": "Options are \"BK\", \"RS\" or \"IN\"",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "completeBooking",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Appointments"
					],
					"operation": [
						"POST Consumer v1 Appointments"
					]
				}
			}
		},
		{
			"displayName": "Appointment Booking Fields",
			"name": "appointmentBookingFields",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "appointmentBookingFields",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Appointments"
					],
					"operation": [
						"POST Consumer v1 Appointments"
					]
				}
			}
		},
		{
			"displayName": "Booked By",
			"name": "bookedBy",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "bookedBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Appointments"
					],
					"operation": [
						"POST Consumer v1 Appointments"
					]
				}
			}
		},
		{
			"displayName": "Booking Window ID",
			"name": "bookingWindowId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "bookingWindowId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Appointments"
					],
					"operation": [
						"POST Consumer v1 Appointments"
					]
				}
			}
		},
		{
			"displayName": "Calendar ID",
			"name": "calendarId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "calendarId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Appointments"
					],
					"operation": [
						"POST Consumer v1 Appointments"
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
						"Appointments"
					],
					"operation": [
						"POST Consumer v1 Appointments"
					]
				}
			}
		},
		{
			"displayName": "Customer Booking Fields",
			"name": "customerBookingFields",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "customerBookingFields",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Appointments"
					],
					"operation": [
						"POST Consumer v1 Appointments"
					]
				}
			}
		},
		{
			"displayName": "Customer ID",
			"name": "customerId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "customerId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Appointments"
					],
					"operation": [
						"POST Consumer v1 Appointments"
					]
				}
			}
		},
		{
			"displayName": "Customer Message",
			"name": "customerMessage",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "customerMessage",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Appointments"
					],
					"operation": [
						"POST Consumer v1 Appointments"
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
						"Appointments"
					],
					"operation": [
						"POST Consumer v1 Appointments"
					]
				}
			}
		},
		{
			"displayName": "End Date Time",
			"name": "endDateTime",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "endDateTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Appointments"
					],
					"operation": [
						"POST Consumer v1 Appointments"
					]
				}
			}
		},
		{
			"displayName": "Group Size",
			"name": "groupSize",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "groupSize",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Appointments"
					],
					"operation": [
						"POST Consumer v1 Appointments"
					]
				}
			}
		},
		{
			"displayName": "Location",
			"name": "location",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "location",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Appointments"
					],
					"operation": [
						"POST Consumer v1 Appointments"
					]
				}
			}
		},
		{
			"displayName": "Location ID",
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
						"Appointments"
					],
					"operation": [
						"POST Consumer v1 Appointments"
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
						"Appointments"
					],
					"operation": [
						"POST Consumer v1 Appointments"
					]
				}
			}
		},
		{
			"displayName": "Notes",
			"name": "notes",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "notes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Appointments"
					],
					"operation": [
						"POST Consumer v1 Appointments"
					]
				}
			}
		},
		{
			"displayName": "Phone",
			"name": "phone",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "phone",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Appointments"
					],
					"operation": [
						"POST Consumer v1 Appointments"
					]
				}
			}
		},
		{
			"displayName": "Phone Type",
			"name": "phoneType",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "phoneType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Appointments"
					],
					"operation": [
						"POST Consumer v1 Appointments"
					]
				}
			}
		},
		{
			"displayName": "Resource Group ID",
			"name": "resourceGroupId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "resourceGroupId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Appointments"
					],
					"operation": [
						"POST Consumer v1 Appointments"
					]
				}
			}
		},
		{
			"displayName": "Resource ID",
			"name": "resourceId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "resourceId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Appointments"
					],
					"operation": [
						"POST Consumer v1 Appointments"
					]
				}
			}
		},
		{
			"displayName": "Resource Ids",
			"name": "resourceIds",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "resourceIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Appointments"
					],
					"operation": [
						"POST Consumer v1 Appointments"
					]
				}
			}
		},
		{
			"displayName": "Service Allocation ID",
			"name": "serviceAllocationId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "serviceAllocationId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Appointments"
					],
					"operation": [
						"POST Consumer v1 Appointments"
					]
				}
			}
		},
		{
			"displayName": "Service ID",
			"name": "serviceId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "serviceId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Appointments"
					],
					"operation": [
						"POST Consumer v1 Appointments"
					]
				}
			}
		},
		{
			"displayName": "Start Date Time",
			"name": "startDateTime",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "startDateTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Appointments"
					],
					"operation": [
						"POST Consumer v1 Appointments"
					]
				}
			}
		},
		{
			"displayName": "Timezone Name",
			"name": "timezoneName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "timezoneName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Appointments"
					],
					"operation": [
						"POST Consumer v1 Appointments"
					]
				}
			}
		},
		{
			"displayName": "Travel Appointment ID",
			"name": "travelAppointmentId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "travelAppointmentId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Appointments"
					],
					"operation": [
						"POST Consumer v1 Appointments"
					]
				}
			}
		},
		{
			"displayName": "Travel Time Mins",
			"name": "travelTimeMins",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "travelTimeMins",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Appointments"
					],
					"operation": [
						"POST Consumer v1 Appointments"
					]
				}
			}
		},
		{
			"displayName": "GET /consumer/v1/appointments/bookingfields",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Appointments"
					],
					"operation": [
						"GET Consumer v1 Appointments Bookingfields"
					]
				}
			}
		},
		{
			"displayName": "Location ID",
			"name": "locationId",
			"description": "id of business location",
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
						"Appointments"
					],
					"operation": [
						"GET Consumer v1 Appointments Bookingfields"
					]
				}
			}
		},
		{
			"displayName": "GET /consumer/v1/appointments/customfields",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Appointments"
					],
					"operation": [
						"GET Consumer v1 Appointments Customfields"
					]
				}
			}
		},
		{
			"displayName": "Location ID",
			"name": "locationId",
			"description": "id of business location",
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
						"Appointments"
					],
					"operation": [
						"GET Consumer v1 Appointments Customfields"
					]
				}
			}
		},
		{
			"displayName": "DELETE /consumer/v1/appointments/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Appointments"
					],
					"operation": [
						"DELETE Consumer v1 Appointments"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "appointment id to delete",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Appointments"
					],
					"operation": [
						"DELETE Consumer v1 Appointments"
					]
				}
			}
		},
		{
			"displayName": "PUT /consumer/v1/appointments/{id}/book",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Appointments"
					],
					"operation": [
						"PUT Consumer v1 Appointments Book"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "appointment id to book",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Appointments"
					],
					"operation": [
						"PUT Consumer v1 Appointments Book"
					]
				}
			}
		},
		{
			"displayName": "Appointment Booking Fields",
			"name": "appointmentBookingFields",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "appointmentBookingFields",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Appointments"
					],
					"operation": [
						"PUT Consumer v1 Appointments Book"
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
						"Appointments"
					],
					"operation": [
						"PUT Consumer v1 Appointments Book"
					]
				}
			}
		},
		{
			"displayName": "Customer Booking Fields",
			"name": "customerBookingFields",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "customerBookingFields",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Appointments"
					],
					"operation": [
						"PUT Consumer v1 Appointments Book"
					]
				}
			}
		},
		{
			"displayName": "Customer Message",
			"name": "customerMessage",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "customerMessage",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Appointments"
					],
					"operation": [
						"PUT Consumer v1 Appointments Book"
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
						"Appointments"
					],
					"operation": [
						"PUT Consumer v1 Appointments Book"
					]
				}
			}
		},
		{
			"displayName": "Group Size",
			"name": "groupSize",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "groupSize",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Appointments"
					],
					"operation": [
						"PUT Consumer v1 Appointments Book"
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
						"Appointments"
					],
					"operation": [
						"PUT Consumer v1 Appointments Book"
					]
				}
			}
		},
		{
			"displayName": "Notes",
			"name": "notes",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "notes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Appointments"
					],
					"operation": [
						"PUT Consumer v1 Appointments Book"
					]
				}
			}
		},
		{
			"displayName": "Phone",
			"name": "phone",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "phone",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Appointments"
					],
					"operation": [
						"PUT Consumer v1 Appointments Book"
					]
				}
			}
		},
		{
			"displayName": "Phone Ext",
			"name": "phoneExt",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "phoneExt",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Appointments"
					],
					"operation": [
						"PUT Consumer v1 Appointments Book"
					]
				}
			}
		},
		{
			"displayName": "Phone Type",
			"name": "phoneType",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "phoneType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Appointments"
					],
					"operation": [
						"PUT Consumer v1 Appointments Book"
					]
				}
			}
		},
		{
			"displayName": "PUT /consumer/v1/appointments/{id}/cancel",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Appointments"
					],
					"operation": [
						"PUT Consumer v1 Appointments Cancel"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "appointment id to cancel",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Appointments"
					],
					"operation": [
						"PUT Consumer v1 Appointments Cancel"
					]
				}
			}
		},
		{
			"displayName": "PUT /consumer/v1/appointments/{id}/confirm",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Appointments"
					],
					"operation": [
						"PUT Consumer v1 Appointments Confirm"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "appointment id to confirm",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Appointments"
					],
					"operation": [
						"PUT Consumer v1 Appointments Confirm"
					]
				}
			}
		},
		{
			"displayName": "Undo",
			"name": "undo",
			"description": "Use this parameter to undo the confirmed status",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "undo",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Appointments"
					],
					"operation": [
						"PUT Consumer v1 Appointments Confirm"
					]
				}
			}
		},
		{
			"displayName": "PUT /consumer/v1/appointments/{id}/noshow",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Appointments"
					],
					"operation": [
						"PUT Consumer v1 Appointments Noshow"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "appointment id to mark as NoShow",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Appointments"
					],
					"operation": [
						"PUT Consumer v1 Appointments Noshow"
					]
				}
			}
		},
		{
			"displayName": "PUT /consumer/v1/appointments/{id}/reschedule",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Appointments"
					],
					"operation": [
						"PUT Consumer v1 Appointments Reschedule"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "appointment id to reschedule",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Appointments"
					],
					"operation": [
						"PUT Consumer v1 Appointments Reschedule"
					]
				}
			}
		},
		{
			"displayName": "End Date Time",
			"name": "endDateTime",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "endDateTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Appointments"
					],
					"operation": [
						"PUT Consumer v1 Appointments Reschedule"
					]
				}
			}
		},
		{
			"displayName": "Resource ID",
			"name": "resourceId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "resourceId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Appointments"
					],
					"operation": [
						"PUT Consumer v1 Appointments Reschedule"
					]
				}
			}
		},
		{
			"displayName": "Resource Ids",
			"name": "resourceIds",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "resourceIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Appointments"
					],
					"operation": [
						"PUT Consumer v1 Appointments Reschedule"
					]
				}
			}
		},
		{
			"displayName": "Service ID",
			"name": "serviceId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "serviceId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Appointments"
					],
					"operation": [
						"PUT Consumer v1 Appointments Reschedule"
					]
				}
			}
		},
		{
			"displayName": "Start Date Time",
			"name": "startDateTime",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "startDateTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Appointments"
					],
					"operation": [
						"PUT Consumer v1 Appointments Reschedule"
					]
				}
			}
		},
		{
			"displayName": "Travel Appointment ID",
			"name": "travelAppointmentId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "travelAppointmentId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Appointments"
					],
					"operation": [
						"PUT Consumer v1 Appointments Reschedule"
					]
				}
			}
		},
		{
			"displayName": "Travel Time Mins",
			"name": "travelTimeMins",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "travelTimeMins",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Appointments"
					],
					"operation": [
						"PUT Consumer v1 Appointments Reschedule"
					]
				}
			}
		},
		{
			"displayName": "PUT /consumer/v1/appointments/{id}/reserve",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Appointments"
					],
					"operation": [
						"PUT Consumer v1 Appointments Reserve"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "appointment id to reserve",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Appointments"
					],
					"operation": [
						"PUT Consumer v1 Appointments Reserve"
					]
				}
			}
		},
		{
			"displayName": "Send Notifications",
			"name": "sendNotifications",
			"description": "",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "sendNotifications",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Appointments"
					],
					"operation": [
						"PUT Consumer v1 Appointments Reserve"
					]
				}
			}
		},
		{
			"displayName": "Appointment Booking Fields",
			"name": "appointmentBookingFields",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "appointmentBookingFields",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Appointments"
					],
					"operation": [
						"PUT Consumer v1 Appointments Reserve"
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
						"Appointments"
					],
					"operation": [
						"PUT Consumer v1 Appointments Reserve"
					]
				}
			}
		},
		{
			"displayName": "Customer Booking Fields",
			"name": "customerBookingFields",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "customerBookingFields",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Appointments"
					],
					"operation": [
						"PUT Consumer v1 Appointments Reserve"
					]
				}
			}
		},
		{
			"displayName": "Customer Message",
			"name": "customerMessage",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "customerMessage",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Appointments"
					],
					"operation": [
						"PUT Consumer v1 Appointments Reserve"
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
						"Appointments"
					],
					"operation": [
						"PUT Consumer v1 Appointments Reserve"
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
						"Appointments"
					],
					"operation": [
						"PUT Consumer v1 Appointments Reserve"
					]
				}
			}
		},
		{
			"displayName": "Notes",
			"name": "notes",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "notes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Appointments"
					],
					"operation": [
						"PUT Consumer v1 Appointments Reserve"
					]
				}
			}
		},
		{
			"displayName": "Phone",
			"name": "phone",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "phone",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Appointments"
					],
					"operation": [
						"PUT Consumer v1 Appointments Reserve"
					]
				}
			}
		},
		{
			"displayName": "Phone Ext",
			"name": "phoneExt",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "phoneExt",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Appointments"
					],
					"operation": [
						"PUT Consumer v1 Appointments Reserve"
					]
				}
			}
		},
		{
			"displayName": "Phone Type",
			"name": "phoneType",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "phoneType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Appointments"
					],
					"operation": [
						"PUT Consumer v1 Appointments Reserve"
					]
				}
			}
		},
];
