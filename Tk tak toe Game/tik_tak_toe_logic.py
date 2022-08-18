class Game:
    chance = 0
    def __init__(self):
        self.grid = [[0,0,0],[0,0,0],[0,0,0]]
    
    def start(self):
        while(True):
            iswin = self.input()
            if(iswin):
                return 
            conti=0
            for i in self.grid:
                for j in i:
                    if j==0:
                        conti=1
                        break
                if(conti==1):
                    break
            if(conti==1):
                continue
            else:
                break
        print("Game Draw")

    def input(self):
        if(self.chance==0):
            print("Player 1 : ",end = " ")
            try:
                x,y = map(int,input().split())
            except:
                return False 
            done,iswin = self.player1(x,y)
            if(iswin):
                print("Player 1 won the game")
                return True
            if(done):
                self.chance = 1
        else:
            print("Player 2 : ",end=" ")
            try:
                x,y = map(int,input().split())
            except:
                return False
            done,iswin = self.player2(x,y)
            if(iswin):
                print("Player 1 won the game")
                return True
            if(done):
                self.chance=0

        for i in self.grid:
            for j in i:
                print(j,end = " ")
            print()
        print()

        return False

    def player1(self,i,j):
        if(self.grid[i][j]==0 and i>=0 and i<3 and j>=0 and j<3):
            self.grid[i][j] = 1
            iswin = self.check_win(i,j,1)
            return True,iswin
        else:
            print("Invalid Input")
            return False,False
    
    def player2(self,i,j):
        if(self.grid[i][j]==0 and i>=0 and i<3 and j>=0 and j<3):
            self.grid[i][j] = 2
            is_win = self.check_win(i,j,2)
            return True,is_win
        else:
            print("Invalid Input")
            return False,False
    
    def check_win(self,i,j,player):
        l1 = [[0,1],[1,0],[1,1],[1,-1]]
        check = False
        for x,y in l1:
            check = self.solve(i,j,x,y,12,23,player)
            if(check==3):
                return True
        return False

    def solve(self,i,j,x,y,pre1,pre2,player):
        if(i<0 or i>=len(self.grid) or j<0 or j>=len(self.grid[0])):
            return 0
        if(self.grid[i][j]!=player):
            return 0
        if(self.grid[i][j]==player):
            a = 0
            if(x+i!=pre1 or y+j!=pre2):
                a += self.solve(i+x,j+y,x,y,i,j,player)
            if(i-x!=pre1 or j-y!=pre2):
                a += self.solve(i-x,j-y,x,y,i,j,player)
            return a+1

c1 = Game()
print("$ TIK TAK TOE $")
while(True):
    s = input("Enter \"start\" to Start the Game : ")
    if(s=="start"):
        break
c1.start()
