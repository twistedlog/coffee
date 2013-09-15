config =
  set: (data, sorted_by)->
    this.data = data
    this.sorted_by = sorted_by
    data: this.data, sorted_by:this.sorted_by

  get: ->
    this.data

  sortedby: ->
    this.sorted_by

  getById: (id)->
    wf_obj = ''
    id = parseInt(id)
    $.each this.get(), (index, record)->
      wf_obj = record if record.id ==id
      false
    wf_obj
