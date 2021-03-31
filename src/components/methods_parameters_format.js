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

//course index(except fixed course index) need to be removed
const plan_course_data_from_frontend = {
  allow_clash_course_array: [course1, course2], //each item is a course object
  not_allow_clash_course_array: [course3, course4],
  user_selected_time_slots_array: user_selected_time_slots_array,
};

const course1 = {
  courseCode: "AAA08D",
  name: "ABSTRACT PAINTING: WHY IT'S HERE & HOW IT'S MADE*",
  au: 3,
  index: [
    {
      index_number: "39674",
      lesson: [
        {
          type: "LEC/STUDIO",
          group: "L1",
          day: "MON",
          full: "1230-1530",
          start: "1230",
          end: "1530",
          duration: 3,
          location: "NIE3-B2-01",
          flag: 0,
          remarks: "",
          date_w1: "2021-08-09",
          weekList: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        },
      ],
    },
    {
      index_number: "39675",
      lesson: [
        {
          type: "LEC/STUDIO",
          group: "L2",
          day: "FRI",
          full: "0930-1230",
          start: "0930",
          end: "1230",
          duration: 3,
          location: "NIE3-B2-01",
          flag: 0,
          remarks: "",
          date_w1: "2021-08-13",
          weekList: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        },
      ],
    },
  ],
  clashFree: false,
  id: "2ufu8tyda",
};

const saved_timetable = [];

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

// const return_course_code_and_selected_index_array = [
//   { course_code: "CZ2006", selected_index: "10123" },
//   { course_code: "AB1206", selected_index: "10324" },
//   { course_code: "ED3406", selected_index: "10345" },
// ];

const return_course_code_and_selected_index_array = [
  [{ CZ2006: "10123", AB1206: "10324" }],
  [{ CZ2006: "10124", AB1206: "10745" }],
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
