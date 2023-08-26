from flask import Flask, request, jsonify
import h5py
import numpy as np

app = Flask(__name__)
model = h5py.File('/content/ensemble_model.h5', 'r')

area_mapping = {
    'Adyar': [1, 0, 0],
    'Anna Nagar': [0, 1, 0],
    'Chrompet': [0, 0, 1]
}

utility_avail_mapping = {
    'Yes': [1, 0],
    'No': [0, 1]
}

street_mapping = {
    'Gravel': [1, 0, 0],
    'No Access': [0, 1, 0],
    'Paved': [0, 0, 1]
}

mzzone_mapping = {
    'A': [1, 0, 0, 0, 0, 0],
    'C': [0, 1, 0, 0, 0, 0],
    'I': [0, 0, 1, 0, 0, 0],
    'RH': [0, 0, 0, 1, 0, 0],
    'RL': [0, 0, 0, 0, 1, 0],
    'RM': [0, 0, 0, 0, 0, 1]
}

@app.route('/predict', methods=['POST'])
def predict():
    # Get values for numerical attributes from the request JSON
    int_sqft = float(request.json['int_sqft'])
    dist_mainroad = float(request.json['dist_mainroad'])
    # Get other numerical attributes as needed
    # e.g., qs_rooms = float(request.json['qs_rooms']), qs_bathroom = float(request.json['qs_bathroom']), etc.

    # Get values for categorical attributes from the request JSON and perform one-hot encoding
    area = request.json['area']
    area_one_hot = area_mapping.get(area, [0, 0, 0])  # Default to [0, 0, 0] if the area is not found in the mapping

    utility_avail = request.json['utility_avail']
    utility_avail_one_hot = utility_avail_mapping.get(utility_avail, [0, 0])  # Default to [0, 0] if the value is not found in the mapping

    street = request.json['street']
    street_one_hot = street_mapping.get(street, [0, 0, 0])  # Default to [0, 0, 0] if the street type is not found in the mapping

    mzzone = request.json['mzzone']
    mzzone_one_hot = mzzone_mapping

    input_data = [area, int_sqft, dist_mainroad, ...]  # Put all input attributes here

    # Make predictions using the loaded H5 model
    predicted_price = predict_with_model(input_data)  # Replace 'predict_with_model' with your actual prediction function

    return jsonify({'predicted_price': predicted_price})
    

if __name__ == '__main__':
    app.run(debug=True)

