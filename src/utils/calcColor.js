import { inRange } from 'lodash'

export const calcColor = (num) => {
    if (num >= 11) return 'bg-danger'
  
    const ranges = [
      {'range': [0,3], 'color': 'bg-secondary'},
      {'range': [3,7], 'color': 'bg-primary'},
      {'range': [7,11], 'color': 'bg-success'},
    ]
  
    return ranges.filter(elem => inRange(num,...elem.range))[0].color
  }