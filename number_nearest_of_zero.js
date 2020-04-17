var arr = [1, 0.5, 5, 89, 41, 26, -0.5]
    /*TO BE MODIFIED AS IT IS TOO LONG */

function get_the_nearest_zero(arr) {


    let index = [];
    let pos_value = []
    let neg_value = []
    let near_zero_value = []


    for (let i = 0; i < arr.length; i++) {

        //get the index of all neg values	
        if (arr[i] <= 0) {

            index.push(i);


        }
        //get the positive values
        else {
            pos_value.push(arr[i]);
        }
    }

    //get all the neg values in one array
    if (index.length >= 1) {
        for (item in index) {
            neg_value.push(arr[index[item]])
        }
        console.log('min of pos value: ', Math.min(...pos_value))

        console.log('max of neg value: ', Math.max(...neg_value))

        if (Math.abs(Math.min(...pos_value)) == Math.abs(Math.max(...neg_value))) {
            near_zero_value.push(Math.min(...pos_value), Math.max(...neg_value))
        } else {
            near_zero_value.push(Math.max(...neg_value))
        }

    } else {
        near_zero_value.push(Math.min(...pos_value))
    }

    return (near_zero_value)

}

console.log(get_the_nearest_zero(arr))