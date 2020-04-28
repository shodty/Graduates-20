export const state = () => ({
  studentObject: [
    {
      code: 'VlachM',
      name: 'Matt Vlach',
      discipline: 'graphic',
      tags: ['type-design', 'identity', 'publication', 'installation'],
      images: 4,
      ext: ['jpg', 'jpg', 'jpg', 'jpg'],
      image1: ['layout', 'publication', 'typography'],
      image2: ['identity', 'book', 'publication'],
      image3: ['identity', 'book', 'publication'],
      image4: ['identity', 'book', 'publication'],
      showWork: false,
      fill: false,
      text:
                'Matt Vlach is an Interdisciplinary Designer based in California & practicing across type, book, installation, and identity work. This site is temporary and a new site will be up Summer 2020. Feel free to contact for project inquiries: hi@mattvlach.co'
    },
    {
      code: 'LandsburgR',
      name: 'Robbie Landsburg',
      discipline: 'graphic',
      tags: [
        'motion design',
        'branding',
        '3D Artist',
        'creative coding',
        'web design'
      ],
      images: 4,
      ext: ['jpg', 'jpg', 'jpg', 'jpg'],
      image1: ['branding', 'motion design', 'identity'],
      image2: ['poster', 'print', 'music'],
      image3: ['identity', 'book', 'publication'],
      image4: ['identity', 'book', 'publication'],
      showWork: false,
      fill: false,
      text:
        'I am a visual thinker and I believe in the value of ideas. As a designer, computer scientist, artist, and musician, I love communicating abstract concepts across multiple disciplines, mediums, and artforms. I am not content in rehashing the same solutions to the same problems– instead I celebrate the opportunity to seek new approaches.'
    },
    {
      code: 'OwensM',
      name: 'Megan Owens',
      discipline: 'graphic',
      tags: [
        'branding',
        'web design',
        'UX/UI',
        'packaging'
      ],
      images: 5,
      ext: ['jpg', 'jpg', 'jpg', 'jpg', 'jpg'],
      image1: ['branding', 'motion design', 'identity'],
      image2: ['poster', 'print', 'music'],
      image3: ['identity', 'book', 'publication'],
      image4: ['identity', 'book', 'publication'],
      image5: ['identity', 'book', 'publication'],
      showWork: false,
      fill: false,
      text:
          'I am a graphic designer with a love for craft and positive impacts. I enjoy the process of branding design and finding the tone and look of a brand then implementing it as a system. One of the best things I have experienced with graphic design is the community that comes with it and I’m looking forward to making more connections going forward in my career.'
    },
    {
      code: 'NowackG',
      name: 'George Nowack',
      discipline: 'graphic',
      tags: [
        'brand strategy',
        'motion design',
        'typography',
        'layout'
      ],
      images: 7,
      ext: ['mp4', 'gif', 'gif', 'png', 'gif', 'gif', 'gif'],
      image1: ['branding', 'motion design', 'identity'],
      image2: ['poster', 'print', 'music'],
      image3: ['identity', 'book', 'publication'],
      image4: ['identity', 'book', 'publication'],
      image5: ['identity', 'book', 'publication'],
      showWork: false,
      fill: false,
      text:
            'I am a graphic and motion designer based in California that specializes in brand solutions through design and animation. My passion lies in exploring the psychology of design and how it influences thinking and behavior. I have a focus centered around the incorporation of design within meaningful and intentional brand strategies that effectively connect businesses with their customers.'
    }
  ],
  tags: ['type-design', 'identity', 'publication', 'installation'],
  currentTags: []
})

export const getters = {
  masterTags: (state) => {
    const taglist = []
    const students = state.studentObject
    for (let i = 0; i < students.length; i++) {
      for (let j = 0; j < students[i].tags.length; j++) {
        if (!taglist.includes(students[i].tags[j])) { taglist.push(students[i].tags[j]) }
      }
    }
    return taglist
  }
}

export const mutations = {
  showStudentWork: (state, index) => {
    state.studentObject[index].showWork = !state.studentObject[index].showWork
  },
  shuffleStudents (state) {
    const students = state.studentObject
    for (let i = students.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i)
      const temp = students[i]
      students[i] = students[j]
      students[j] = temp
    }
    state.studentObject = students
  },
  fill: (state, index) => {
    state.studentObject[index].fill = !state.studentObject[index].fill
  },
  toggleTags: (state, tags) => {
    state.currentTags = tags
  }
}

export const actions = {
  showStudentWork: (context, index) => {
    context.commit('showStudentWork', index)
  },
  shuffleStudents: (context) => {
    context.commit('shuffleStudents')
  },
  fill: (context, index) => {
    context.commit('fill', index)
  },
  toggleTags: (context, tags) => {
    context.commit('toggleTags', tags)
  }
}
