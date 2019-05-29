
def email(n,m):
    return n+"."+m+"@evolveU.ca"
    
    
print (email("larry", "Schumulich"))
print (email("heiko","Peters"))

income=0

def calculate_taxes(income):
    if  income >=0: 
        tax=0.1
    elif income >=10000:
        tax=0.2
    elif income >= 20000:
        tax=0.3
    return tax

print (calculate_taxes(100))

    