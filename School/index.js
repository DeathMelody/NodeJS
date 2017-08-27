var klass = require('./klass')

exports.add = function(klasses){//模块在此外抛
    klasses.forEach(function(item,index) {
        var _klass = item
        var teacher = item.teacherName;
        var students = item.students;
        klass.add(teacherName,students)
        // klass.add('xi',['白富美','高富帅'])
    });
}
