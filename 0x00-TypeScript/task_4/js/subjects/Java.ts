/// <reference path="./Subject.ts" />

namespace Subjects {
    export interface Teacher {
        experienceTeachingJava?: number
    }
    export class Java extends Subject {
        getRequirements = ():string => {
            return `Here is the list of requirements for Cpp`
        }

        getAvailableTeacher = ():string => {
            const { firstName, experienceTeachingJava } = this.teacher
            if (experienceTeachingJava === undefined || experienceTeachingJava <= 0) {
                return `No available teacher`
            }
            return `Available teacher: ${firstName}`
        }
    }
}