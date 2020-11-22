const questionList = [
  {
    title: '暱稱',
    input: {
      inputType: 'input',
      dataType: 'text',
      placeholder: '您的暱稱'
    },
    errorMessage: {
      isShow: false,
      content: '請填寫本欄位'
    },
    isRequired: true,
    value: ''
  },
  {
    title: '電子郵件',
    input: {
      inputType: 'input',
      dataType: 'email',
      placeholder: '您的電子郵件'
    },
    errorMessage: {
      isShow: false,
      content: '請填寫本欄位'
    },
    isRequired: true,
    value: ''
  },
  {
    title: '手機號碼',
    input: {
      inputType: 'input',
      dataType: 'tel',
      placeholder: '您的手機號碼'
    },
    errorMessage: {
      isShow: false,
      content: '請填寫本欄位'
    },
    isRequired: true,
    value: ''
  },
  {
    title: '報名類型',
    input: {
      inputType: 'radio',
      dataType: '',
      options: [
        {
          isChecked: true,
          content: '躺在床上用想像力實作'
        },
        {
          isChecked: false,
          content: '趴在地上滑手機找現成的'
        }
      ],
      placeholder: '您的電子郵件'
    },
    errorMessage: {
      isShow: false,
      content: '請填寫本欄位'
    },
    isRequired: true,
    value: ''
  },
  {
    title: '怎麼知道這個活動的？',
    input: {
      inputType: 'input',
      dataType: 'text',
      placeholder: '您的回答'
    },
    errorMessage: {
      isShow: false,
      content: '請填寫本欄位'
    },
    isRequired: true,
    value: ''
  },
  {
    title: '其他',
    description: '對活動的一些建議',
    input: {
      inputType: 'input',
      dataType: 'text',
      placeholder: '您的回答'
    },
    errorMessage: {
      isShow: false,
      content: '請填寫本欄位'
    },
    isRequired: false,
    value: ''
  },
]

export default questionList