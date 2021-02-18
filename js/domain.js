var data = [
  {
    outer: "",
    inner: "",
    i: 1,
    j: "",
    output: "",
    highlight: "declare i",
    tutor: true,
    answer: {
      state: "outer loop",
      value: "true",
      reason: "i was initialized",
      hint: "The value of i is set to 1."
    },
    response: {
      state: "",
      value: "",
      reason: "",
      explanation: ""
    }
  },
  {
    outer: true,
    inner: "",
    i: 1,
    j: "",
    output: "",
    highlight: "outer",
    tutor: true,
    answer: {
      state: "j",
      value: "1",
      reason: "outer condition was true",
      hint: "The value of i is set to 1."
    },
    response: {
      state: "",
      value: "",
      reason: "",
      explanation: ""
    }
  },
  {
    outer: true,
    inner: "",
    i: 1,
    j: 1,
    output: "",
    highlight: "declare j",
    tutor: false
  },
  {
    outer: true,
    inner: true,
    i: 1,
    j: 1,
    output: "",
    highlight: "inner",
    tutor: false
  },
  {
    outer: true,
    inner: true,
    i: 1,
    j: 1,
    output: 1,
    highlight: "innerstatement",
    tutor: false
  },
  {
    outer: true,
    inner: true,
    i: 1,
    j: 2,
    output: "",
    highlight: "increment j",
    tutor: false
  },
  {
    outer: true,
    inner: true,
    i: 1,
    j: 2,
    output: "",
    highlight: "inner",
    tutor: false
  },
  {
    outer: true,
    inner: true,
    i: 1,
    j: 2,
    output: 1,
    highlight: "innerstatement",
    tutor: false
  },
  {
    outer: true,
    inner: true,
    i: 1,
    j: 3,
    output: "",
    highlight: "increment j",
    tutor: false
  },
  {
    outer: true,
    inner: true,
    i: 1,
    j: 3,
    output: "",
    highlight: "inner",
    tutor: false
  },
  {
    outer: true,
    inner: true,
    i: 1,
    j: 3,
    output: 1,
    highlight: "innerstatement",
    tutor: false
  },
  {
    outer: true,
    inner: true,
    i: 1,
    j: 4,
    output: "",
    highlight: "increment j",
    tutor: false
  },
  {
    outer: true,
    inner: true,
    i: 1,
    j: 4,
    output: "",
    highlight: "inner",
    tutor: true,
    answer: {
      state: "print",
      value: "power of i by j",
      reason: "inner condition was true",
      hint: "The value of j is equal to 4."
    },
    response: {
      state: "",
      value: "",
      reason: "",
      explanation: ""
    }
  },
  {
    outer: true,
    inner: true,
    i: 1,
    j: 4,
    output: 1,
    highlight: "innerstatement",
    tutor: true,
    answer: {
      state: "j",
      value: "5",
      reason: "inner statements was executed",
      hint: "Printed i to the power of j."
    },
    response: {
      state: "",
      value: "",
      reason: "",
      explanation: ""
    }
  },
  {
    outer: true,
    inner: true,
    i: 1,
    j: 5,
    output: "",
    highlight: "increment j",
    tutor: false
  },
  {
    outer: true,
    inner: false,
    i: 1,
    j: 5,
    output: "",
    highlight: "inner",
    tutor: true,
    answer: {
      state: "print",
      value: "a line break",
      reason: "inner condition was false",
      hint: "The value of j is equal to 5."
    },
    response: {
      state: "",
      value: "",
      reason: "",
      explanation: ""
    }
  },
  {
    outer: true,
    inner: "",
    i: 1,
    j: "",
    output: "Add a line break",
    highlight: "outerstatement",
    tutor: true,
    answer: {
      state: "i",
      value: "2",
      reason: "outer statements was executed",
      hint: "Printed a line break."
    },
    response: {
      state: "",
      value: "",
      reason: "",
      explanation: ""
    }
  },
  {
    outer: true,
    inner: "",
    i: 2,
    j: "",
    output: "",
    highlight: "increment i",
    tutor: true,
    answer: {
      state: "outer loop",
      value: "true",
      reason: "i was incremented",
      hint: "The value of i is equal to i + 1."
    },
    response: {
      state: "",
      value: "",
      reason: "",
      explanation: ""
    }
  },
  {
    outer: true,
    inner: "",
    i: 2,
    j: "",
    output: "",
    highlight: "outer",
    tutor: true,
    answer: {
      state: "j",
      value: "1",
      reason: "outer condition was true",
      hint: "The value of i is equal to 2."
    },
    response: {
      state: "",
      value: "",
      reason: "",
      explanation: ""
    }
  },
  {
    outer: true,
    inner: "",
    i: 2,
    j: 1,
    output: "",
    highlight: "declare j",
    tutor: false
  },
  {
    outer: true,
    inner: true,
    i: 2,
    j: 1,
    output: "",
    highlight: "inner",
    tutor: false
  },
  {
    outer: true,
    inner: true,
    i: 2,
    j: 1,
    output: 2,
    highlight: "innerstatement",
    tutor: false
  },
  {
    outer: true,
    inner: true,
    i: 2,
    j: 2,
    output: "",
    highlight: "increment j",
    tutor: false
  },
  {
    outer: true,
    inner: true,
    i: 2,
    j: 2,
    output: "",
    highlight: "inner",
    tutor: false
  },
  {
    outer: true,
    inner: true,
    i: 2,
    j: 2,
    output: 4,
    highlight: "innerstatement",
    tutor: true,
    answer: {
      state: "j",
      value: "3",
      reason: "inner statements was executed",
      hint: "Printed i to the power of j."
    },
    response: {
      state: "",
      value: "",
      reason: "",
      explanation: ""
    }
  },
  {
    outer: true,
    inner: true,
    i: 2,
    j: 3,
    output: "",
    highlight: "increment j",
    tutor: true,
    answer: {
      state: "inner loop",
      value: "true",
      reason: "j was incremented",
      hint: "The value of j is equal to j + 1."
    },
    response: {
      state: "",
      value: "",
      reason: "",
      explanation: ""
    }
  },
  {
    outer: true,
    inner: true,
    i: 2,
    j: 3,
    output: "",
    highlight: "inner",
    tutor: true,
    answer: {
      state: "print",
      value: "power of i by j",
      reason: "inner condition was true",
      hint: "The value of j is equal to 3."
    },
    response: {
      state: "",
      value: "",
      reason: "",
      explanation: ""
    }
  },
  {
    outer: true,
    inner: true,
    i: 2,
    j: 3,
    output: 8,
    highlight: "innerstatement",
    tutor: false
  },
  {
    outer: true,
    inner: true,
    i: 2,
    j: 4,
    output: "",
    highlight: "increment j",
    tutor: false
  },
  {
    outer: true,
    inner: true,
    i: 2,
    j: 4,
    output: "",
    highlight: "inner",
    tutor: false
  },
  {
    outer: true,
    inner: true,
    i: 2,
    j: 4,
    output: 16,
    highlight: "innerstatement",
    tutor: false
  },
  {
    outer: true,
    inner: true,
    i: 2,
    j: 5,
    output: "",
    highlight: "increment j",
    tutor: true,
    answer: {
      state: "inner loop",
      value: "false",
      reason: "j was incremented",
      hint: "The value of j is equal to j + 1."
    },
    response: {
      state: "",
      value: "",
      reason: "",
      explanation: ""
    }
  },
  {
    outer: true,
    inner: false,
    i: 2,
    j: 5,
    output: "",
    highlight: "inner",
    tutor: true,
    answer: {
      state: "print",
      value: "a line break",
      reason: "inner condition was false",
      hint: "The value of j is equal to 5."
    },
    response: {
      state: "",
      value: "",
      reason: "",
      explanation: ""
    }
  },
  {
    outer: true,
    inner: "",
    i: 2,
    j: "",
    output: "Add a line break",
    highlight: "outerstatement",
    tutor: true,
    answer: {
      state: "i",
      value: "3",
      reason: "outer statements was executed",
      hint: "Printed a line break."
    },
    response: {
      state: "",
      value: "",
      reason: "",
      explanation: ""
    }
  },
  {
    outer: true,
    inner: "",
    i: 3,
    j: "",
    output: "",
    highlight: "increment i",
    tutor: true,
    answer: {
      state: "outer loop",
      value: "true",
      reason: "i was incremented",
      hint: "The value of i is equal to i + 1."
    },
    response: {
      state: "",
      value: "",
      reason: "",
      explanation: ""
    }
  },
  {
    outer: true,
    inner: "",
    i: 3,
    j: "",
    output: "",
    highlight: "outer",
    tutor: false
  },
]