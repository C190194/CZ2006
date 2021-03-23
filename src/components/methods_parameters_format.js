// Planning timetable method
// if (a course index is fixed){
// remove all other course indexes inside the course object
// }
// parameter to be passed = (course_object_array)

// More Options method //add free time slots, allow clash
// parameter to be passed = (course_object_array, course_code(clashAllowed)array,user_selected_time_slots_nested_array,)
//user_selected_time_slots_array format below
const user_selected_time_slots_array = [
  [new Date("March 1, 2021 11:13:00"), new Date("March 1, 2021 12:13:00")], //each item is an array of start time and end time of a slot
  [new Date("March 2, 2021 9:13:00"), new Date("March 1, 2021 11:13:00")],
  [new Date("March 3, 2021 5:13:00"), new Date("March 1, 2021 11:13:00")],
];

// Backend will return (return_data_to_be_displayed_array, return_course_code_and_selected_index_object_array);
//1 appointment = 1 time slot
//1 course index can have multiple appointments
//formats below
const appointment1 = {
  title: "CZ2006",
  startDate: new Date(2021, 3, 1, 9, 35),
  endDate: new Date(2021, 3, 1, 11, 30),
  id: 0, //random id required by React //serve no purpose
  type: "LEC/STUDIO",
  group: "L1",
  location: "NIE7-02-07",
  remarks: "",
};
const appointment2 = {
  title: "CZ2006",
  startDate: new Date(2021, 3, 1, 9, 35),
  endDate: new Date(2021, 3, 1, 11, 30),
  id: 0,
  type: "TUT",
  group: "L1",
  location: "TR+34",
  remarks: "",
};

const return_data_to_be_displayed_array = [
  { page: 1, occupiedTimeSlots: [appointment1, appointment2] },
  {
    page: 2,
    occupiedTimeSlots: [],
  },
];

const return_course_code_and_selected_index_array = [
  { course_code: "CZ2006", selected_index: "10123" },
  { course_code: "AB1206", selected_index: "10324" },
  { course_code: "ED3406", selected_index: "10345" },
];

//saved setting format
const usersTimeTablesData = {
  user_email: "abc@gmail.com",
  timetables_with_setting: [
    {
      courses: [], //each item is course object
      setting: {
        allowClashCC: ["CZ2006", "CZ3003"],
        userDefinedTimeSlots: [
          [
            new Date("March 1, 2021 10:15:00"),
            new Date("March 1, 2021 12:15:00"),
          ], //each item is an array of start time and end time of a slot
        ],
      },
    },
  ],
};
