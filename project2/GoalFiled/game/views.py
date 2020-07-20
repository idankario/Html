from django.shortcuts import render, redirect

from django.contrib.auth.forms import UserCreationForm, AuthenticationForm

from django.contrib.auth.models import User

from django.db import IntegrityError

from django.contrib.auth import login, logout, authenticate

from django.http import JsonResponse

from django.utils import timezone



"""
def loginRegisterPage(request):
	if request.method == 'POST':
		username = request.POST.get('username')
		password =request.POST.get('password')

		user = authenticate(request, username=username, password=password)

		if user is not None:
			login(request, user)
			return redirect('mytodos')
		else:
			messages.info(request, 'Username OR password is incorrect')

	context = {}
	return render(request, 'accounts/login.html', context)
    """

# 	context = {}
# 	return render(request, 'accounts/mytodos.html', context)

# def loginRegisterPage(request):
#     from = CreateUserForm(request or None)
#         if from.is_valid():
#             form.save()
#     context={
#         'form' : form
#     }
#     return rander(request, 'game/mytodos.html',context)
    # if (request.method == 'GET'):
    #     return render(request, 'game/loginRegisterPage.html', {'form': UserCreationForm() })

    # else:

    #     if request.POST['password1'] == request.POST['password2']:

    #         try:

    #             user = User.objects.create_user(request.POST['username'], password=request.POST['password1'])

    #             user.save()

    #             login(request, user)

    #             return redirect('mytodos')

    #         except IntegrityError:

    #             return render(request, 'game/loginRegisterPage.html', {'form': UserCreationForm(), "errMsg": "User exists. Choose a different one" })

    #     else:

    #         return render(request, 'game/loginRegisterPage.html', {'form': UserCreationForm(), "errMsg": "Password didn't match" })



def mytodos(request):

    return render(request, 'game/mytodos.html')



def homepage(request):

    return render(request, 'game/index.html')


def contacts(request):
    return render(request,'game/contacts.html')


def createGame(request):
        return render(request,'game/createGame.html')

def myGame(request):
    return render(request,'game/myGame.html')




def table(request):
    data = [
                {
                "fieldName": "The diamond",
                "openingHours": "10:00-20:00",
                "phoneNumber": "09-8810884",
                "address": "Netanya Municipal Stadium, Netanya"

                },
                {
                    "fieldName": "Bloomfield",
                    "openingHours": "08:00-20:00",
                    "phoneNumber": "03-0003884",
                    "address": "The rest of Israel, Tel Aviv-Jaffa"
                },
                {
                    "fieldName": "Teddy",
                    "openingHours": "08:00-22:00",
                    "phoneNumber": "02-678-8320",
                    "address": "Teddy Stadium, Jerusalem"
                },
                {
                    "fieldName": "Sammy Ofer",
                    "openingHours": "06:00-20:00",
                    "phoneNumber": "04-300-2301",
                    "address": "Pinchas and Avraham Rotenberg 2, Haifa"
                }
            ]
    return JsonResponse(data, safe=False)



    

    def games(request):
        return render(request,'game/index.html',{'games':games})


    def addGameForm(request):
        if (request.method =='GET'):
            return render(request,'game/createGame.html',{'form',fieldsForm()})
        else:
            form=fieldsForm(request.POST)
            new_game=form.save(commit=False)
            new_game.userId = request.user
            mew_game.save()
            return redirect('games')
        


#until here
"""
def logoutuser(request):

    if request.method == 'POST':

        logout(request)

    return redirect('homepage') 



def loginuser(request):

    if (request.method == 'GET'):

        return render(request, 'game/loginform.html', {'form': AuthenticationForm() })

    else:

        user = authenticate(request, username=request.POST['username'], password=request.POST['password'])



        if user is None:

            return render(request, 'game/loginRegisterPage.html.html', {'form': AuthenticationForm(), "errMsg": "User doesn't exist" })

        else:

            login(request, user)

            return redirect('mytodos')
"""