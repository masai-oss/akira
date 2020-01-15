from os import path
import json

BASE_PATH = "/../static/localization"


def get_lang(language):
    try:
        with open(path.dirname(__file__) + f'{BASE_PATH}/{language}.json') as json_file:
            data = json.load(json_file)
            print(data)
            response_object = {
                "comment": f'Localization for {language}',
                "data": data
            }
            return response_object, 200
    except FileNotFoundError:
        response_object = {
            "comment": f'Localization not found for {language}',
            "data": {}
        }
        return response_object, 400
