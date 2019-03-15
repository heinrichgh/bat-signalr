using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace BatmanSignalServer
{
    public class BatmanSignalHub : Hub
    {
        public async Task SetVelocity(float horizontalVelocity, float verticalVelocity)
        {
            await Clients.Others.SendAsync("ReceiveVelocity", horizontalVelocity, verticalVelocity);
        }
        
        public async Task ToggleShining()
        {
            await Clients.Others.SendAsync("ReceiveShiningToggle");
        }
    }
}